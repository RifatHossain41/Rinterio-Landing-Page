import { LuMessageSquareText } from "react-icons/lu";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

const Review = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-center gap-44 mt-14 rounded-3xl bg-white p-10">
        <div className="text-center">
          <LuMessageSquareText className="mx-auto" size={30} />
          <h2 className="my-2 text-2xl font-bold">235+</h2>
          <p>Happy Client Review</p>
        </div>
        <div className="text-center">
          <BiSolidMessageSquareDetail className="mx-auto" size={30} />
          <h2 className="my-2 text-2xl font-bold">50+</h2>
          <p>Work Departments</p>
        </div>
        <div className="text-center">
          <IoIosPeople className="mx-auto" size={30} />
          <h2 className="my-2 text-2xl font-bold">30K+</h2>
          <p>Our Happy Client</p>
        </div>
        <div className="text-center">
          <IoPeople className="mx-auto" size={30} />
          <h2 className="my-2 text-2xl font-bold">307+</h2>
          <p>Staff Members</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
