import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

// export default function About() {
//   const [about, setAbout] = useState([]);
//   // const [isPending, setIsPending] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setAbout(data);
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div className=""></div>
//     </>
//   );
// }

export default function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch product data once when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.example.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products to show all initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Debounced function for filtering products
  const handleSearch = _.debounce((query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, 300);

  // Update search query and call handleSearch with the debounced input
  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    handleSearch(query);
  };

  return (
    <div className="text-red-500">
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleChange}
      />
      <div>
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
