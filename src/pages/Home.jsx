import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const products = [
  { id: 1, name: "iPhone 14", price: 999, img: "https://i.ebayimg.com/images/g/xyz123.jpg" },
  { id: 2, name: "MacBook Pro", price: 1999, img: "https://i.ebayimg.com/images/g/abc456.jpg" },
  { id: 3, name: "Samsung Galaxy S22", price: 899, img: "https://i.ebayimg.com/images/g/def789.jpg" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar search={search} setSearch={setSearch} />

      <header className="bg-yellow-400 p-10 text-center">
        <h2 className="text-3xl font-bold">Find Your Best Deals Here!</h2>
      </header>

      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md block text-center">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </section>
    </div>
  );
}


