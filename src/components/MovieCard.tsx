import React from "react";

type MovieCardProps = {
  title: string;
  vote_average: number;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};

const getImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/original/${path}`;

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  vote_average,
  genre_ids,
  poster_path,
}) => {
  return (
    <article className="flex w-[180px] flex-col gap-1">
      <div className="flex flex-col">
        <img
          loading="lazy"
          src={getImageUrl(poster_path)}
          alt={title}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col justify-center gap-0.5 px-1 font-bold">
        <h3 className="text-base">{title}</h3>
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0265755368c2e748754f6842918e8956d8067ee175d384c19f398e257e2cdd5d?placeholderIfAbsent=true&apiKey=1771274d3ec94526b636feb5ba2f5b0e"
            alt=""
            className="w-[70px]"
          />
          <span className="text-xs font-medium">
            {Math.round((vote_average / 10) * 100)}%
          </span>
        </div>
        <p className="text-xs text-gray-400">{genre_ids.join(", ")}</p>
      </div>
    </article>
  );
};

export default MovieCard;
