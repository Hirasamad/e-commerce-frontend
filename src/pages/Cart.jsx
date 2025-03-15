import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <p>Your cart is currently empty.</p>
      <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md block text-center">
        Proceed to Checkout
      </Link>
    </div>
  );
}
