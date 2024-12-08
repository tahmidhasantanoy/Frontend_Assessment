import icon1 from "../../../public/icons/fb.png";
import SideBarItems from "../../components/SideBarItems/SideBarItems";
import RightSideOption from "../../components/UI/RightSideOption";

const Home = () => {
  return (
    <div className="bg-gray-100 lg:pl-4 lg:pb-6 ">
      {/* Layout with Sidebar and Content */}
      <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Sidebar */}
        <aside
          className="lg:w-[17%] .p-4 rounded-md
        "
        >
          <SideBarItems />
        </aside>

        {/* Main Content */}
        <main className="lg:w-9/12 space-y-8">
          {/* Section 1 */}
          <div className="bg-white shadow-md p-2 lg:p-6 rounded-lg flex flex-col lg:flex-row">
            {/* Left - Social Icons */}
            <div className="sm:hidden lg:flex lg:flex-col lg:w-[8%] space-y-3 lg:mt-12 lg:pl-6">
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
            </div>

            {/* Middle - Text */}
            <div className="lg:w-[92%] bg-white p-2 lg:p-6 rounded-lg">
              <p className="text-3xl font-semibold text-center">
                Working on it
              </p>
            </div>
          </div>
        </main>
        <div className=" w-2/12 .fixed top-10 right-6 hidden sm:hidden lg:block">
          <RightSideOption />
        </div>
      </div>
    </div>
  );
};

export default Home;
