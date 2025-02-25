import { MdArrowOutward } from "react-icons/md";
import bann from "../assets/image/banner.png";
const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <img className="mx-auto" src={bann} alt="img" />
        </div>
        <div className=" text-center">
          <h1 className="text-5xl font-bold my-4">
            A born house of this design has a <br /> striking appear
          </h1>
          <p>
            <small>
              A barn house of this design has a striking appearance The barn
              house captivates with its blend of rustic charm and modern
              sophistication, featuring weathered wood, sleek metal <br />
              accents, and large windows that flood the space with natural
              light. View Details
            </small>
          </p>
          <button className="my-6 flex justify-center items-center mx-auto bg-lime-200 py-2 px-4 rounded-full">
            View Details <MdArrowOutward className="bg-lime-300 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
