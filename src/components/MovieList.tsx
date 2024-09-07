"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";

import { Navigation, FreeMode } from "swiper/modules";
import SwiperCore from "swiper";
type Movie = {
  id: number;
  title: string;
  vote_average: number;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};

type MovieListProps = {
  title: string;
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  // const swiperRef = useRef<SwiperCore | null>(null);

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.update();
  //   }
  // }, [movies]);

  return (
    // <section className="mx-[4%] mt-12 md:mx-[8%]">
    // <h2 className="mb-[20px] text-3xl font-semibold text-gray-100">
    //   {title}
    // </h2>

    <Swiper
      modules={[Navigation, FreeMode]}
      navigation
      slidesPerView="auto"
      spaceBetween={20}
      speed={700}
      // freeMode={true}
      slidesPerGroupAuto
      className="swiper-wrapper"
      // onSwiper={(swiper) => {
      //   swiperRef.current = swiper;
      // }}
      // breakpoints={{
      //   1024: {
      //     spaceBetween: 30,
      //   },
      //   1600: {
      //     spaceBetween: 40,
      //   },
      // }}
      // className=""
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={movie.id} className="flex w-[180px] justify-center">
          {/* <MovieCard {...movie} /> */}
          <h1 className="bg-red-500 w-[180px] h-[270px]">{movie.title}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MovieList;

{
  /* <div className="-ml-10 mt-[125px] hidden md:block">
          <button
            className="text-5xl text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </button>
        </div> */
}

{
  /* <div className="-mr-10 mt-[125px] hidden md:block">
          <button
            className="text-5xl text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </button>
        </div> */
}

{
  /* <div className="flex w-full justify-center gap-4"> */
}
{
  /* </div> */
}

{
  /* </section> */
}
