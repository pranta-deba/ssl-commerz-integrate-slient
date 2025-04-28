import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = [];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="text-xl font-bold">
          PayKor
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal px-1 gap-3">
          <li>
            <NavLink to={"/cart"} className="relative ">
              <BsCart4 size={25} />
              {cartItems.length > 0 && (
                <span className="w-3 h-3 absolute flex justify-center items-center text-[8px] p-1 rounded-full bg-white border-[1px] border-red-700 -top-[5px] right-[5.3px]">
                  1
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
