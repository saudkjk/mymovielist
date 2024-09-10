import { fetchMoviesWithExtraDetails } from "@/actions/API";
import Hero from "@/components/Hero Components/Hero";
import MovieList from "@/components/MovieList";

export default async function Home() {
  const movies = await fetchMoviesWithExtraDetails();

  return (
    <>
      <Hero movies={movies} />
      <MovieList title="Popular" movies={movies} />
    </>
  );
}

{
  /* <h1>My Movie List</h1> */
}

{
  /* {movies.map((movie) => (
        <div> {movie.title}</div>
      ))} */
}

{
  /* // <Suspense key={movie.id} fallback={<div>Loading...</div>}>
        // <div> {movie.title}</div>
        //  <Suspense/>
      ))} */
}
{
  /* <HeroMovieCarousel movies={movies} /> */
}

{
  /* <MovieList title="Popular" movies={movies} /> */
}
