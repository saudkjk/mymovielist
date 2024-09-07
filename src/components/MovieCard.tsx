import Image from "next/image";
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
    <div className="flex w-[200px] flex-col gap-1">
      <div className="flex flex-col">
        <Image
          // loading="lazy"
          src={getImageUrl(poster_path)}
          alt={title}
          className="rounded-lg"
          style={{
            objectFit: "cover",
          }}
          // fill
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col justify-center gap-0.5 px-1 font-bold">
        <h3 className="text-base">{title}</h3>
        <div className="flex items-center gap-2">
          <img src="/tmdb.svg" alt="" className="w-[70px]" />
          <span className="text-xs font-medium">
            {Math.round((vote_average / 10) * 100)}%
          </span>
        </div>
        <p className="text-xs text-gray-400">{genre_ids.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
