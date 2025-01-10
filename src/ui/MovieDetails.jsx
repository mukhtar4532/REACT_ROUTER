import { NavLink, useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = () => {
  // const params = useParams();
  // console.log(params);

  const movieData = useLoaderData();
  console.log(movieData);

  const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } =
    movieData;

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-72 mx-auto">
      {/* Movie Image */}
      <img
        src={Poster}
        alt={imdbID}
        className=" w-auto h-auto  object-cover "
      />
      {/* Movie Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2"> {Title}</h3>
        <p className="text-gray-600 text-sm mb-4">{Plot}</p>
        {/* Watch Now Button */}

        <NavLink to={"/movie"}>
          <button className="px-4 py-2 justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
            Go Back
          </button>
        </NavLink>
      </div>
    </li>
  );
};
