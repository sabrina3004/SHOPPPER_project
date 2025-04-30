import React from "react";
import { FaSnowflake, FaHandPaper, FaCodepen, FaGg } from "react-icons/fa";

const features = [
  {
    icon: <FaSnowflake className="text-2xl text-red-500 mr-3" />,
    title: "Eros Imperdie",
    description:
      "We’ll generate a sitemap for your site, submit it to search engine is and track.",
  },
  {
    icon: <FaHandPaper className="text-2xl text-red-500 mr-3" />,
    title: "Rerum Rutrum",
    description:
      "We’ll generate a sitemap for your site, submit it to search engine is and track.",
  },
  {
    icon: <FaCodepen className="text-2xl text-red-500 mr-3" />,
    title: "Proident Congu",
    description:
      "We’ll generate a sitemap for your site, submit it to search engine is and track.",
  },
  {
    icon: <FaGg className="text-2xl text-red-500 mr-3" />,
    title: "Vero Maecenas",
    description:
      "We’ll generate a sitemap for your site, submit it to search engine is and track.",
  },
];

const About = () => {
  return (
    <section>
      <div className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-100 to-slate-50 max-w-full mx-0 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            We Are Your Favourite, Online Store.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Dui habitasse provident eu etiam praesent placeat maiores temporibus,
            accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem
            quam sit possimus? Quam cras facilisi officia fusce. Ac, excepteur
            excepteur fusce? Sunt minim expedita magnis!
          </p>
        </div>

        {/* Right: Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div>{item.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-600 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
