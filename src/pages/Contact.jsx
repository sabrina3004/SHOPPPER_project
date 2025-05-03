import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 from-10% via-zinc-50 via-30% to-white to-90% ...">
      <div className="flex flex-col p-18  md:flex-row gap-8 p-6 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Say Hello.</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="border-b-2 border-red-500 w-1/5 my-4"></div>

          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-xl text-red-500 mr-3 mt-1" />
              <span>212 7th St SE, Washington, DC 20003, USA</span>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-xl text-red-500 mr-3 mt-1" />
              <span>info@example.com</span>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-xl text-red-500 mr-3 mt-1" />
              <span>123-456-7890 / 91</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Ask Your Queries</h3>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
