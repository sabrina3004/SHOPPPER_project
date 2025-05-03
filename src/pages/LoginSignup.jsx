import React from 'react';

const LoginSignup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200">
          Continue
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <span className="text-red-500 hover:underline cursor-pointer">Login here</span>
        </p>

        <div className="flex items-start mt-4 text-sm text-gray-600">
          <input type="checkbox" className="mt-1 mr-2" />
          <p>
            By continuing, I agree to the{' '}
            <span className="text-red-500 hover:underline">terms of use</span> &{' '}
            <span className="text-red-500 hover:underline">privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
