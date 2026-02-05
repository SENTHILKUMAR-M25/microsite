import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">
          RealEstate Portfolio
        </h1>

        <div className="flex gap-6">
          {["home", "about", "projects", "contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className="capitalize text-gray-600 hover:text-blue-600"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
