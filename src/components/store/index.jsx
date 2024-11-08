import { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function showMore(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  function truncateText(value, index) {
    if (expandedIndex === index) {
      return value;
    } else {
      return value.substring(0, 20) + "....";
    }
  }

  const [filteredProducts, setFilteredProducts] = useState("");

  return (
    <>
      <div className="search flex justify-center items-center gap-2">
        <h2 className="font-bold">Search:</h2>
        <input
          type="search"
          name=""
          id=""
          className="w-[70%] border border-black rounded-[30px] my-2 outline-none p-1 px-3"
          placeholder="What are you looking for?"
        />
      </div>

      <div className="w-full h-full grid grid-cols-3 gap-4 overflow-y-scroll p-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="p-2 border flex flex-col items-center gap-3 border-gray-300"
          >
            <div className="w-full flex justify-between">
              <div className="font-bold capitalize"> {item.category}</div>
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
  );
}
