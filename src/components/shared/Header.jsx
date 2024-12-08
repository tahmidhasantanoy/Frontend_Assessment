import { IoMdMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import logo from "../../../public/icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search Best Food"
            className="w-2/6 mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <IoSearch className="w-6 h-6 absolute right-[440px] top-2 text-orange-600 bg-orange-100 border-[1px] border-orange-500 p-1 rounded-lg" />
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex space-x-6">
          <CiLight className="w-6 h-6" />
          <MdOutlineHealthAndSafety className="w-6 h-6" />
          <IoMdMenu className="w-6 h-6" />
        </nav>

        {/* Mobile View: Search and Menu */}
        <div className="flex lg:hidden items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <IoMdMenu className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
