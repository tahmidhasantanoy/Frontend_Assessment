import { RiHome3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { TbBrandTelegram } from "react-icons/tb";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";

const Sidebar = () => {
  return (
    <nav className="flex justify-center items-center h-screen px-2">
      <ul className="space-y-4 text-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
              : "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
          }
        >
          <RiHome3Line />
        </NavLink>
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            isActive
              ? "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
              : "block px-2 py-2 bg-gray-100 rounded-xl"
          }
        >
          <CiGrid41 />
        </NavLink>
        <NavLink
          to={"/message"}
          className={({ isActive }) =>
            isActive
              ? "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
              : "block px-2 py-2 bg-gray-100 rounded-xl"
          }
        >
          <TbBrandTelegram />
        </NavLink>
        <NavLink
          to={"/video"}
          className={({ isActive }) =>
            isActive
              ? "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
              : "block px-2 py-2 bg-gray-100 rounded-xl"
          }
        >
          <MdOutlineSlowMotionVideo />
        </NavLink>
        <NavLink
          to={"/more"}
          className={({ isActive }) =>
            isActive
              ? "block px-2 py-2 text-orange-500 bg-orange-50 rounded-xl"
              : "block px-2 py-2 bg-gray-100 rounded-xl"
          }
        >
          <CgMenuGridO />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Sidebar;
