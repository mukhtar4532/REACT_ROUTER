export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=5aad702f&s=titanic&page=1"
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
