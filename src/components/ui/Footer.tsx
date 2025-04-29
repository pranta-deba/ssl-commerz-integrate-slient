import { FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex flex-col p-4 md:p-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Navigation Links */}
        <ul className="flex flex-col items-center space-y-4 text-center sm:flex-row sm:justify-around sm:space-y-0 sm:space-x-6 lg:justify-start">
          <li className="hover:text-gray-400 cursor-pointer">Shop</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex justify-center pt-6 lg:pt-0 space-x-4">
          <Link
            to="/"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full  text-white hover:bg-white hover:text-black transition"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            to="/"
            aria-label="Pinterest"
            className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <FaPinterest className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} PayKor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
