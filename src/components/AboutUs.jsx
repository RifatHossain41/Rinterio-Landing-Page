import { FaArrowRightLong } from "react-icons/fa6";
import img from "../assets/image/Rectangle.png";
import img1 from "../assets/image/commercial.png";
import img2 from "../assets/image/residential.png";
const AboutUs = () => {
  return (
    <div className="py-16 px-2">
      <div className="lg:flex gap-4">
        <div className="lg:w-1/2">
          <button className="flex items-center gap-2 bg-white px-2 rounded-3xl">
            {" "}
            <FaArrowRightLong /> About Us
          </button>
          <h2 className="text-4xl font-bold my-7">
            We design thoughtful,<br /> liveable spaces
          </h2>
          <p>
            About Us The barn house captivates with its blend of rustic charm
            and modern sophistication, featuring weathered wood, sleek metal
            accents.
          </p>

          <div className="flex items-center gap-3 bg-white p-3 mt-7 rounded-3xl">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Commercial</h3>
              <p>
                About Us The barn house captivates with its blend <br /> of
                rustic charm and modern{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 mt-7 rounded-3xl">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Residential</h3>
              <p>
                About Us The barn house captivates with its blend <br /> of
                rustic charm and modern{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
