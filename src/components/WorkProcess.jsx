import { FaArrowRightLong } from "react-icons/fa6";

import img1 from "../assets/image/concept.png";
import img2 from "../assets/image/flow-chart.png";
import img3 from "../assets/image/vision.png";
import img4 from "../assets/image/budget-planning.png";

const WorkProcess = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <button className="flex items-center justify-center mx-auto gap-2 bg-white rounded-3xl px-3 py-2">
          <FaArrowRightLong className="" /> How we works
        </button>
        <h2 className="text-4xl font-bold my-3">Our Works Process</h2>
        <small>
          A barn house of this design has a striking appearance The barn house
          captivates with its blend of rustic charm and modern sophistication,
          <br />
          featuring weathered wood, sleek metal accents
        </small>
      </div>
      <div className="lg:flex gap-6 items-center justify-center mt-6 lg:mx-2">
        <div className="bg-fuchsia-200 p-5 rounded-2xl">
          <img src={img1} alt="" />
          <h2 className="text-2xl font-bold my-3">Concept</h2>
          <small>About Us The barn house captivates with its blend of rustic charm
          and modern</small>
        </div>
        <div className="bg-yellow-200 p-5 rounded-2xl">
          <img src={img2} alt="" />
          <h2 className="text-2xl font-bold my-3">Design Process</h2>
          <small>About Us The barn house captivates with its blend of rustic charm
          and modern</small>
        </div>
        <div className="bg-sky-200 p-5 rounded-2xl">
          <img src={img3} alt="" />
          <h2 className="text-2xl font-bold my-3">Supervison</h2>
          <small>About Us The barn house captivates with its blend of rustic charm
          and modern</small>
        </div>
        <div className="bg-blue-300 p-5 rounded-2xl">
          <img src={img4} alt="" />
          <h2 className="text-2xl font-bold my-3">Budget Planing</h2>
          <small>About Us The barn house captivates with its blend of rustic charm
          and modern</small>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
