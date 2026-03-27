import React from "react";

const segments = [
  {
    title: "Agriculture",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
  },
  {
    title: "Automotive Steels",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
  },
  {
    title: "Construction",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Consumer Goods",
    img: "https://images.unsplash.com/photo-1581091012184-5c1d7c44f6c1",
  },
  {
    title: "Energy and Power",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    title: "Engineering",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  },
];

const ImageSection = () => {
  return (
    <section className="bg-[#f1f4f7] py-16 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 underline underline-offset-4 mb-12">
        We cater these Product Segments:
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {segments.map((item, index) => (
          <div key={index} className="text-center">

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-52 object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-blue-500 text-lg sm:text-xl font-medium">
              {item.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ImageSection;