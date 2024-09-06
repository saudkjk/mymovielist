import { fetchMovies, fetchMoviesWithExtraDetails } from "@/actions/API";
import MovieList from "@/components/MovieList";
import Hero from "@/components/Hero Components/Hero";

export default async function Home() {
  const movies = await fetchMoviesWithExtraDetails();
  return (
    <main>
      <Hero movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Popular" movies={movies} />
    </main>
  );
}
