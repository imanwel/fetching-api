import { useCallback, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import CustomSelect from "../select";
// import { update } from "lodash";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [date, setDate] = useState("");

  const handleChange = (value) => {
    setCategory(value);
    console.log(value);
  };

  const getData = useCallback(async () => {
    setLoading(true); // Set loading to true when fetching starts
    let url = `https://fakestoreapi.com/products`;

    if (category !== "") {
      url += `/category/${category}`;
    }

    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching completes
    }
  }, [category]);

  useEffect(() => {
    getData();
  }, [category]);

  function showMore(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  function truncateText(value, index) {
    return expandedIndex === index ? value : value.substring(0, 20) + "....";
  }

  async function handleDelet(id) {
    console.log(id);

    const response = await axios.delete(`https://fakestoreapi.com/carts/${id}`);
    if (response.status === 200) {
      console.log(response);
    }
  }
  async function updateItem(id) {
    console.log(id);
    const body = {
      userId: Number(id),
      date,
      products: [{ productId: 1, quantity: 3 }],
    };
    console.log(body);
    const response = await axios.put(
      `https://fakestoreapi.com/carts/${id}`,
      body
    );
    if (response.status === 200) {
      console.log(response);
    }
  }

  return (
    <>
      <div className="search flex justify-center items-center gap-2">
        <h2 className="font-bold">Search:</h2>
        <CustomSelect handleChange={handleChange} />
      </div>

      {loading ? ( // Show loading spinner when loading
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-full h-full grid grid-cols-3 gap-4 overflow-y-scroll p-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="p-2 border flex flex-col items-center gap-3 border-gray-300"
            >
              <div className="w-full flex justify-between">
                <div className="font-bold capitalize">{item.category}</div>
                <div
                  className="border p-3 bg-yellow-500 cursor-pointer"
                  onClick={() => {
                    setCart(cart + 1);
                    console.log(item);
                  }}
                >
                  <GiShoppingCart />
                </div>
              </div>

              <div className="w-[50%] h-[50%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              <div>{truncateText(item.description, index)}</div>

              <button onClick={() => showMore(index)} className="border p-3">
                {expandedIndex === index ? "show less" : "read more"}
              </button>
              <button onClick={() => handleDelet(item.id)}>
                {" "}
                delete product
              </button>
              <button
                onClick={() => {
                  updateItem(item.id);
                }}
              >
                update
              </button>
              <input
                value={date}
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
