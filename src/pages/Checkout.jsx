import { useState } from "react";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Checkout</h2>
      {orderPlaced ? (
        <p className="text-green-600 text-lg font-bold mt-4">✅ Order Placed Successfully!</p>
      ) : (
        <button onClick={placeOrder} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
          Place Order
        </button>
      )}
    </div>
  );
}

