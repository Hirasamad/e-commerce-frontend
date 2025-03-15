import { useParams } from "react-router-dom";
import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 14", price: 999, img: "https://i.ebayimg.com/images/g/xyz123.jpg" },
  { id: 2, name: "MacBook Pro", price: 1999, img: "https://i.ebayimg.com/images/g/abc456.jpg" },
  { id: 3, name: "Samsung Galaxy S22", price: 899, img: "https://i.ebayimg.com/images/g/def789.jpg" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="p-6">
      <img src={product.img} alt={product.name} className="w-full max-w-md mx-auto rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-xl text-gray-600">${product.price}</p>
      <button onClick={addToCart} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
        Add to Cart
      </button>
    </div>
  );
}



