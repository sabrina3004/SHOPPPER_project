import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Custom Print Store</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-red-600 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-red-600 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-red-600 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-red-600 text-xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-300">
            Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-red-600">
                Know More About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Visit Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Let’s Connect
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Important Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-red-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Shipping Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 | Custom Printing</p>
          <p>Powered By Custom Printing</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
