import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to EcoShop
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">
            Carefully selected items for your satisfaction
          </p>
        </div>
        <div className="text-center p-6">
          <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Quick and reliable shipping to your doorstep
          </p>
        </div>
        <div className="text-center p-6">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
          <p className="text-gray-600">
            Safe and protected online shopping experience
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;