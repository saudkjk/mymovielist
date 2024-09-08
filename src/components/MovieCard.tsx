import React from "react";
import Image from "next/image";

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
    <article className="flex flex-col gap-1">
      <div className="flex h-[270px] w-[180px] flex-col">
        {/* <img
          loading="lazy"
          // src={getImageUrl(poster_path)}

          src="dune2.jpg"
          alt={title}
          className="rounded-lg object-contain"
        /> */}
        <Image
          // loading="lazy"
          src={getImageUrl(poster_path)}
          fill
          style={{
            objectFit: "cover",
          }}
          alt={title}
          className="rounded-lg object-contain"
          sizes="(min-width: 1540px) 248px, (min-width: 1280px) calc(10vw + 96px), (min-width: 1040px) calc(25vw - 36px), (min-width: 780px) calc(33.33vw - 43px), calc(49.13vw - 53px)"
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
    </article>
  );
};

export default MovieCard;
