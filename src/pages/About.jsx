import React from "react";

export const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-500">
        About Us
      </h2>
      <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        MovieTicket is your go-to platform for discovering and booking tickets
        for the latest movies. With a simple, user-friendly interface, we make
        it easy to enjoy the magic of cinema.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Section - Image */}
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/400x300?text=About+Us"
            alt="About MovieTicket"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section - Text */}
        <div className="max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-400 mb-4">
            At MovieTicket, we believe in redefining the way people experience
            movies. From blockbusters to indie films, our platform offers a
            seamless and enjoyable booking process that caters to every movie
            lover's needs.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Easy and fast ticket booking process.</li>
            <li>Up-to-date information on the latest movie releases.</li>
            <li>Safe and secure payment options.</li>
            <li>Personalized recommendations for movie enthusiasts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
