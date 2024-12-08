import menuIcon2 from "../../../public/icons/small size 2 orange fruit png image.png";
import menuIcon3 from "../../../public/icons/menu2.jpg";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Option from "../UI/Option/Option";

const SideBarItems = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-100 lg:hidden shadow-md w-full">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg lg:hidden font-bold">Brand</div>

          {/* Mobile Menu Button */}
          <label
            htmlFor="desktop-drawer"
            className="lg:hidden block cursor-pointer p-2 border rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </nav>

      {/* Sidebar Drawer for Desktop */}
      <input id="desktop-drawer" type="checkbox" className="hidden" />
      {/* Left change here */}
      <div
        className="fixed top-[89px] lg:left-14 left-0 w-64 bg-white h-screen transform -translate-x-full lg:translate-x-0 transition-transform duration-300 shadow-none rounded-2xl"
        id="drawer"
      >
        {/* Change  */}
        <div className="mx-4 space-y-3 mt-6 relative">
          <div className="border-[1px] border-orange-400 rounded-lg">
            <Option />
          </div>
          <input
            type="text"
            placeholder="Search by Fruits Name"
            className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          {/* ok search */}
          <IoSearch className="absolute w-6 h-6 absolut right-2 top-[49px] text-orange-600 bg-orange-100 border-[1px] border-orange-500 p-1 rounded-lg" />
        </div>
        {/* Adjusted with top-16 */}
        <div className="p-4">
          <h2 className="font-semibold">Fruits List</h2>
          <ul className="mt-4 space-y-3">
            <NavLink
              to={"/fruits/orange"}
              // className="flex items-center space-x-4"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-4 border-2 border-orange-500 rounded-lg"
                  : "flex items-center space-x-4"
              }
            >
              <img
                className="w-12 h-12"
                src={menuIcon2}
                alt="icons"
                style={{
                  clipPath: "polygon(50% 3%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />

              <div className="block text-gray-700 hover:text-green-600">
                <p className="text-xl font-semibold">Orange</p>
                <p className="text-gray-500">Vitamin C</p>
              </div>
            </NavLink>
            <NavLink
              to={"/fruits/avocado"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-4 border-2 border-orange-500 rounded-lg"
                  : "flex items-center space-x-4"
              }
            >
              <img
                className="w-12 h-12"
                src={menuIcon3}
                alt="icons"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <div className="block text-gray-700 hover:text-green-600">
                <p className="text-xl font-semibold">Avocado</p>
                <p className="text-gray-500">Vitamin B</p>
              </div>
            </NavLink>
            <NavLink
              to={"/fruits/avocado2"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-4 border-2 border-orange-500 rounded-lg"
                  : "flex items-center space-x-4"
              }
            >
              <img
                className="w-12 h-12"
                src={menuIcon2}
                alt="icons"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <div className="block text-gray-700 hover:text-green-600">
                <p className="text-xl font-semibold">Avocado</p>
                <p className="text-gray-500">Vitamin E</p>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarItems;
