import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " bg-base-300 text-black" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " bg-base-300 text-black" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className=" navbar border-2 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-8 h-8" src="Logo" alt="" />
            TMS
          </Link>
        </div>
        <div className="navbar-end w-full hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
