import icon1 from "../../../public/icons/fb.png";
import icon2 from "../../../public/icons/linkedIn.png";
import icon3 from "../../../public/icons/twitter.png";
import icon4 from "../../../public/icons/more.png";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="hidden sm:visible lg:hidden  space-y-3">
        <img className="w-8 h-8 bg-blue-500 text-white rounded-full p-2" src={icon1} alt="icons" />
        <img className="w-8 h-8 bg-blue-800 text-white rounded-full p-1" src={icon2} alt="icons" />
        <img className="w-8 h-8 bg-blue-500 rounded-full p-2" src={icon3} alt="icons" />
        <img className="w-7 h-7 bg-red-700 text-white rounded-full p-2" src={icon4} alt="icons" />
      </div>
    </footer>
  );
};

export default Footer;
