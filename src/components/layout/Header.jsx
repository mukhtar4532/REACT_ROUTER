import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveLinks = ({ isActive }) =>
    isActive
      ? "text-red-500 text-xl"
      : "text-white hover:text-yellow-300 text-xl";
  return (
    <header className=" bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* App Name */}
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-yellow-300">
            <p>MoviesPicker</p>
          </NavLink>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-yellow-300 text-xl">
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className={getActiveLinks}>
            <p>About</p>
          </NavLink>
          <NavLink to="/movie" className={getActiveLinks}>
            <p>Movies</p>
          </NavLink>
          <NavLink to="/contact" className={getActiveLinks}>
            <p>Contact</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
