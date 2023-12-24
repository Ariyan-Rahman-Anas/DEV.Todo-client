import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <nav className="flex items-center justify-between px-5 py-3 ">
          <div className="nav-left">
            <h1 className="font-semibold text-3xl">DEV.Todo</h1>
          </div>
          <div className="nav-center">
            <ul className="flex items-center justify-center">
              <li className="rounded-md p4 py-1  hover:text-white hover:bg-black hover:border-black duration-500 ">
                <NavLink className="px-5 py-1 ">Home</NavLink>
              </li>
              <li className="rounded-md p4 py-1 hover:text-white hover:bg-black hover:border-black duration-500 ">
                <NavLink className="px-5 py-1 ">About</NavLink>
              </li>
              <li className="rounded-md p4 py-1 hover:text-white hover:bg-black hover:border-black duration-500 ">
                <NavLink className="px-5 py-1 ">Your Todo</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <Link className="px-5 py-2 text-white bg-black rounded-md border-2 border-transparent hover:text-black hover:bg-transparent hover:border-black duration-500 ">Let's talk</Link>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;