import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RightSideOption = () => {
  const [value, setValue] = useState(50); // Default range value
  const [selected, setSelected] = useState("All Vitamin"); // Default value
  const [isOpen, setIsOpen] = useState(false); // Toggle state
  const [isOn, setIsOn] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelect = (value) => {
    setSelected(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="bg-white p-2 rounded-xl">
      <div className="flex flex-col items-center space-y-4 border-2 border-gray-300 rounded-xl p-4">
        {/* Range Slider */}
        <div >
          <div className="flex justify-center items-center space-x-1">
            <p>Paragraph font size</p>
            <p className="text-orange-500">{value}</p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-1/2 sm:w-40 h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f01c05 ${value}%, #ebe6e5 ${value}%)`,
            }}
          />
        </div>
        {/* Dropdown Menu */}
        <div className="space-y-1">
          <p>Choose Vitamin Type</p>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {selected}
            {isOpen ? (
              <FaChevronUp className="ml-1" />
            ) : (
              <FaChevronDown className="ml-1" />
            )}
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul className="py-1 text-sm text-gray-700">
                {["A", "B", "C", "E"].map((vitamin) => (
                  <li key={vitamin}>
                    <button
                      onClick={() => handleSelect(vitamin)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      Vitamin {vitamin}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-2">
          <p className="text-nowrap">Turn Off Subtitle</p>
          <button
            onClick={toggleSwitch}
            className={`w-8 h-4 flex items-center rounded-full p-1 ${
              isOn ? "bg-zinc-500" : "bg-gray-200"
            }`}
          >
            <div
              className={`w-3 h-3 bg-white rounded-full shadow-md transform ${
                isOn ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideOption;
