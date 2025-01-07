import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const getActiveLinks = ({ isActive }) =>
    isActive
      ? "text-red-500 text-xl"
      : "text-white hover:text-yellow-300 text-xl";
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">MovieTicket</h3>
          <p className="text-sm">
            Your one-stop solution for booking movie tickets. Browse movies,
            book seats, and enjoy the show!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-yellow-300 text-xl">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getActiveLinks}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/movie" className={getActiveLinks}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getActiveLinks}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@movieticket.com"
              className="hover:text-yellow-300">
              support@movieticket.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-yellow-300">
              +1 234 567 890
            </a>
          </p>
          <p className="text-sm">Address: 123 Movie Lane, Film City, USA</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MovieTicket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
