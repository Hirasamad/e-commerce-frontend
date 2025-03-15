import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">eBay</h1>
      <div className="flex items-center bg-white px-2 rounded-md">
        <input
          type="text"
          placeholder="Search for products..."
          className="p-2 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-gray-500 ml-2 cursor-pointer" />
      </div>
      <div className="flex space-x-4">
        <FaUser className="text-white text-xl cursor-pointer" />
        <FaShoppingCart className="text-white text-xl cursor-pointer" />
      </div>
    </nav>
  );
}



  