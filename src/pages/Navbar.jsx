import { MdArrowOutward } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="navbar gap-10 ">
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Service</a>
              </li>

              <li>
                <a>Portfolio</a>
              </li>

              <li>
                <a>Blogs</a>
              </li>

              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <MdArrowOutward className="bg-lime-300  rounded-full" /> Rinterio{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Service</a>
            </li>

            <li>
              <a>Portfolio</a>
            </li>

            <li>
              <a>Blogs</a>
            </li>

            <li>
              <a>Contact Us</a>
            </li>

            <div className="flex items-center justify-center gap-3 ml-96">
              <li>
                <div>
                  <CiSearch className="bg-white rounded-full" />
                </div>
              </li>

              <li>
                <div>
                  <AiOutlineShoppingCart className="bg-white rounded-full" />
                </div>
              </li>

              <li>
                <div className="bg-lime-300 rounded-e-full rounded-s-full">
                  Book Consult{" "}
                  <MdArrowOutward className="bg-black text-white rounded-full" />
                </div>
              </li>
            </div>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
