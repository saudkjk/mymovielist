type Movie = {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

export default function HeroMovieInfo({ movie }: { movie: Movie }) {
  return (
    <>
      <span key={movie.title} className="animate-fade-in-up translate-y-10 transform text-lg font-semibold opacity-0 md:mb-2 md:text-4xl lg:text-5xl">
        {movie.title}
      </span>
      <div key={movie.vote_average} className="animate-fade-in-up flex translate-y-10 transform items-center gap-[8px] opacity-0 delay-100 md:mb-2">
        <img src="/tmdb.svg" alt="Rating" className="h-[12px] w-[100px]" />
        <span className="text-center text-sm md:text-base">
          {Math.round((movie.vote_average / 10) * 100)}%
        </span>
      </div>
      <p key={movie.overview} className="animate-fade-in-up mb-0 line-clamp-2 translate-y-10 transform text-sm opacity-0 delay-200 md:mb-4 md:line-clamp-3 md:text-base">
        {movie.overview}
      </p>
    </>
  );
}
