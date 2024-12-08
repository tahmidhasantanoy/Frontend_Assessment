import image1 from "../../../../public/Images/img1.jpg";
import image2 from "../../../../public/Images/image2.png";

const Avocado = () => {
  return (
    <>
      {/* TWI I-right */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-[47%]">
          <h2 className="text-4xl font-bold text-start mb-8 text-black">
            Health Benefits of an Avocado
          </h2>
          {/* Part - 1 */}
          <h4 className="text-2xl font-semibold text-black mb-4">
            It&apos;s Easy Being Green
          </h4>
          <p className="text-gray-700">
            They&apos;ve been the darlings of social media, and they&apos;ve
            been called America&apos;s new favorite fruit. Turns out, avocados
            are popular for good reason.
          </p>
          {/* Part - 2 */}
          <h4 className="text-2xl font-semibold text-black mb-4">
            Save Your Brain
          </h4>
          <p className="text-gray-700 mb-4">
            Avocados give you a good dose of vitamin E, which may help protect
            against Alzheimer&apos;s disease and slow decline in your memory and
            thinking skills.
          </p>
        </div>
        {/* Right - Image */}
        <div className="lg:w-[47%] h-full">
          <img className="rounded-2xl" src={image2} alt="Avocado benefits" />
        </div>
      </div>
      {/* only Text */}
      <div className="w-full lg:w-[92%] p-2 lg:p-6">
        <h4 className="text-2xl font-semibold text-black mb-4">
          Help You Lose Weight
        </h4>
        <p className="text-gray-700">
          A half-cup of guacamole has about 6 grams of fiber, which is almost
          one-fourth of your daily fiber needs, making it an excellent choice
          for digestive health and promoting satiety. The fiber content in
          guacamole helps regulate blood sugar levels, supports a healthy gut
          microbiome, and contributes to heart health by lowering cholesterol.
          Additionally, guacamole, made primarily from avocados, provides
          heart-healthy monounsaturated fats, essential vitamins like C, E, K,
          and folate, and minerals like potassium. These nutrients work together
          to support overall well-being, including improved skin health,
          stronger immunity, and better cardiovascular function. Pairing
          guacamole with fiber-rich whole-grain crackers, raw vegetables, or as
          a topping for salads and lean proteins enhances its nutritional
          profile while adding flavor to your meals. It’s not just a delicious
          dip—it’s a nutrient-dense addition to a balanced diet.
        </p>
      </div>
      {/* TWI I-left */}
      <div className="bg-white p-2 lg:p-6 flex flex-col lg:flex-row lg:gap-x-6">
        <div className="w-full lg:w-[46%]">
          <img
            src={image1}
            alt="Black apple"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-[46%]">
          <h4 className="text-2xl font-semibold text-black mb-4">
            Better than Apple
          </h4>
          <p className="text-gray-700 mb-4">
            Avocados and apples are both incredibly nutritious, but they offer
            different benefits depending on your dietary needs and health goals.
            Avocados are rich in healthy monounsaturated fats, which support
            heart health, help lower bad cholesterol levels, and provide a
            lasting energy source. They are also packed with potassium.
          </p>
        </div>
      </div>
    </>
  );
};

export default Avocado;
