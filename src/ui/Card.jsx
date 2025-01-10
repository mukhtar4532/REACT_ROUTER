import { NavLink } from "react-router-dom";

export const Card = ({ currMovie }) => {
  const { Poster, Title, Year, imdbID } = currMovie;
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Movie Image */}
      <img
        src={Poster}
        alt={imdbID}
        className=" w-auto h-auto  object-cover "
      />
      {/* Movie Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Title: {Title}</h3>
        <p className="text-gray-600 text-sm mb-4">Year: {Year}</p>
        {/* Watch Now Button */}
        <NavLink to={`/movie/${imdbID}`}>
          <button className="px-4 py-2 justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
            Watch Now
          </button>
        </NavLink>
      </div>
    </li>
  );
};
