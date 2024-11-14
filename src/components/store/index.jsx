import { useCallback, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import CustomSelect from "../select";
import { MdOutlineFilterAlt } from "react-icons/md";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

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

  return (
    <>
      {loading ? ( // Show loading spinner when loading
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="search flex justify-end items-center gap-2 m-3 mx-8">
            {/* <h2 className="font-bold">Search:</h2> */}
            <label htmlFor="filter">
              <MdOutlineFilterAlt />
            </label>
            <CustomSelect handleChange={handleChange} id={"filter"} />
          </div>

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
                    onClick={() => setCart(cart + 1)}
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
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
