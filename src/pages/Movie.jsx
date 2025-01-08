import { useLoaderData } from "react-router-dom";
import { Card } from "../ui/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {moviesData.Search.map((currMovie) => {
          return <Card key={currMovie.imdbID} currMovie={currMovie} />;
        })}
      </ul>
    </>
  );
};
