// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import MovieCard from "./MovieCard";
// import "swiper/css";
// import "swiper/css/navigation";
// import "@/app/globals.css";

// import { Navigation, FreeMode } from "swiper/modules";
// import SwiperCore from "swiper";
// type Movie = {
//   id: number;
//   title: string;
//   vote_average: number;
//   genre_ids: number[];
//   poster_path: string;
//   backdrop_path: string;
//   overview: string;
//   release_date: string;
// };

// type MovieListProps = {
//   title: string;
//   movies: Movie[];
// };

// const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
//   const swiperRef = useRef<SwiperCore | null>(null);
//   return (
//     <section className="mx-[4%] mt-12 md:mx-[8%]">
//       <h2 className="mb-[20px] text-3xl font-semibold text-gray-100">
//         {title}
//       </h2>

//       <div className="flex w-full justify-center gap-4">
//         <div className="-ml-10 mt-[125px] hidden md:block">
//           <button
//             className="text-5xl text-white"
//             onClick={() => swiperRef.current?.slidePrev()}
//           >
//             &lt;
//           </button>
//         </div>

//         <Swiper
//           modules={[Navigation, FreeMode]}
//           navigation
//           slidesPerView={2}
//           spaceBetween={20}
//           speed={700}
//           freeMode={true}
//           slidesPerGroupAuto
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             1600: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//           }}
//           className="flex-1"
//         >
//           {movies.map((movie, index) => (
//             <SwiperSlide
//               key={movie.id}
//               className="flex w-[180px] justify-center"
//             >
//               <MovieCard {...movie} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="-mr-10 mt-[125px] hidden md:block">
//           <button
//             className="text-5xl text-white"
//             onClick={() => swiperRef.current?.slideNext()}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default MovieList;

"use client";
import React, { useRef } from "react";
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
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="mx-[4%] mt-12 md:mx-[8%]">
      <h2 className="mb-[20px] text-3xl font-semibold text-gray-100">
        {title}
      </h2>

      <div className="flex w-full gap-4">
        <div className="-ml-10 mt-[125px] hidden md:block">
          <button
            className="text-5xl text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={2}
          spaceBetween={20}
          speed={700}
          slidesPerGroup={2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1280: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            1536: {
              slidesPerView: 7,
              slidesPerGroup: 7,
            },
            1920: {
              slidesPerView: 8,
              slidesPerGroup: 8,
            },
          }}
          className="flex-1"
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              className="flex w-[180px] justify-center"
            >
              <MovieCard {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="-mr-10 mt-[125px] hidden md:block">
          <button
            className="text-5xl text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
export default MovieList;
