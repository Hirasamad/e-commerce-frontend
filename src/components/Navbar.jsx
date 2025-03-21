import { Link } from 'react-router-dom';
import { ShoppingCart, Store, User } from 'lucide-react';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const items = useCartStore((state) => state.items);
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    clearUser();
    localStorage.removeItem('token');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">EcoShop</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                  <User className="h-6 w-6" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            )}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




  