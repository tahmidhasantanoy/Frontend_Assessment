import image1 from "../../../public/Images/img1.jpg";
import image2 from "../../../public/Images/image2.png";
import icon1 from "../../../public/icons/fb.png";
import SideBarItems from "../../components/SideBarItems/SideBarItems";

const HomeCopy = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="space-y-8 .w-10/12">
        {/* First section 2 ... */}
        <div className="flex lg:flex-row">
          {/* Flex row lg device & others??? */}
          {/* this div have image TWI I-right, only text, TWI I-left (wrong info) */}
          {/* most left */}
          <div>
            <SideBarItems /> {/* Side bar form chatGPT */}
          </div>
          {/* Middle || Contecnt */}
          <div className="flex sm:flex-col lg:flex-row bg-white shadow-md .p-6 rounded-lg">
            {/* This above div under icon , text & image */}

            {/* social icons */}
            <div className="sm:w-[0px] lg:w-[5%] space-y-3 lg:mt-12 lg:pl-6">
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
              <img className="w-8 h-8" src={icon1} alt="icons" />
            </div>

            {/* text with header */}
            <div className="bg-white .shadow-md p-6 rounded-lg lg:w-[47%]">
              <h2 className="text-4xl font-bold text-start mb-8 text-black-600">
                Health Benefits of an Avocado
              </h2>
              <h4 className="text-2xl font-semibold text-black-500 mb-4">
                It&apos;s Easy Being black
              </h4>
              <p className="text-gray-700">
                They&apos;ve been the darlings of social media, and they&apos;ve
                been called America&apos;s new favorite fruit. Turns out,
                avocados are popular for good reason.
              </p>

              <h4 className="text-2xl font-semibold text-black-500 mb-4">
                Save Your Brain
              </h4>
              <p className="text-gray-700 mb-4">
                Avocados give you a good dose of vitamin E, which may help
                protect against Alzheimer&apos;s disease and slow decline in
                your memory and thinking skills.
              </p>
            </div>
            {/* image */}
            <div className=" flex justify-center items-center p-5 rounded-full lg:w-[47%]">
              <img
                className="sm:p-2 lg:p-0 rounded-2xl"
                src={image2}
                alt="Avocado benefits"
              />
            </div>
          </div>
          {/* Most right */}
          <div className=" w-2/12">
            <p className="text-black text-6xl">setting</p>
          </div>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-2xl font-semibold text-black-500 mb-4">
            Better than Apple
          </h4>
          <p className="text-gray-700 mb-4">
            Avocados and apples are both incredibly nutritious, but they offer
            different benefits depending on your dietary needs. Avocados are
            rich in heart-healthy monounsaturated fats, making them an excellent
            choice for boosting energy and supporting brain function. They are
            also packed with essential nutrients like potassium, vitamin K, and
            vitamin E, which promote healthy skin and overall well-being. On the
            other hand, apples are a low-calorie, high-fiber fruit that provides
            a refreshing dose of antioxidants, including vitamin C, to
            strengthen your immune system. Their natural sweetness and hydrating
            properties make them a perfect snack for maintaining digestion and
            overall health. Ultimately, whether an avocado is better than an
            apple depends on your specific health goals and preferences.
          </p>
          <img
            src={image1}
            alt="black apple"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-2xl font-semibold text-black-500 mb-4">
            Help You Lose Weight
          </h4>
          <p className="text-gray-700">
            A half-cup of guacamole has about 6 grams, almost 1/4, of your daily
            fiber needs. Fiber helps you feel full, so you&apos;re less likely
            to overeat. And although avocados are high in fat, it&apos;s mainly
            healthy monounsaturated fat. Research has found that this type of
            fat in your diet can help trim your waistline. Instead of chicken
            salad with mayo, try chickpeas with mashed avocado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCopy;
