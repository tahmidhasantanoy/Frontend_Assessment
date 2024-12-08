import { NavLink } from "react-router-dom";

const Option = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-2 text-center">
      <NavLink
        to={"/fruits"}
        className={({ isActive }) =>
          isActive
            ? "w-1/2 bg-orange-100 text-red-500 p-1 rounded-lg m-[3px]"
            : ""
        }
      >
        Fruits
      </NavLink>
      <NavLink
        to={"/vegetables"}
        className={({ isActive }) =>
          isActive ? "w-1/2 bg-orange-100 text-red-500 p-2 rounded-lg" : ""
        }
      >
        Vegetables
      </NavLink>
      {/* </ul> */}
    </div>
  );
};

export default Option;
