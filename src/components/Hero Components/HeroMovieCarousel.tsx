// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel";

// type ExtraDetails = {
//   [key: string]: any;
// };

// type HeroMovieCarouselProps = {
//   movies: {
//     title: string | undefined;
//     extraDetails: ExtraDetails;
//   }[];
//   currentIndex: number;
//   handleScrollTo: (index: number) => void;
//   setApi: (api: CarouselApi) => void;
// };

// const HeroMovieCarousel: React.FC<HeroMovieCarouselProps> = ({
//   movies,
//   currentIndex,
//   handleScrollTo,
//   setApi,
// }) => {
//   return (
//     <div className="group hidden lg:block">
//       <div className="absolute right-[8%] top-[30%] z-10 flex">
//         <button
//           onClick={() => handleScrollTo(currentIndex - 1)}
//           className="absolute z-10 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
//         >
//           <span className="w-[230px] pb-2 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
//             ▲
//           </span>
//         </button>
//         <Carousel
//           setApi={setApi}
//           plugins={
//             [
//               // Autoplay({
//               //   delay: 2000,
//               // }),
//             ]
//           }
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           orientation="vertical"
//           className=""
//         >
//           <CarouselContent className="h-[550px] xl:h-[600px]">
//             {movies.map((movie, index) => (
//               <CarouselItem key={index} className="basis-1/4">
//                 <div className="">
//                   <img
//                     src={`https://image.tmdb.org/t/p/original/${movie.extraDetails.images.backdrops[0].file_path}`}
//                     onClick={() => handleScrollTo(index)}
//                     className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white object-cover brightness-90 transition xl:h-[160px] xl:w-[275px] ${
//                       index === currentIndex
//                         ? "border-opacity-100"
//                         : "border-opacity-10"
//                     } `}
//                     alt={movie.title}
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>

//       <button
//         onClick={() => handleScrollTo(currentIndex + 1)}
//         className="absolute right-[8%] z-10 -mt-9 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
//       >
//         <span className="w-[230px] pb-1 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
//           ▼
//         </span>
//       </button>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "@/app/globals.css";
// import Image from "next/image";
// import {
//   Pagination,
//   FreeMode,
//   Autoplay,
//   EffectFade,
//   Navigation,
// } from "swiper/modules";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// export default function HeroMovieCarousel({ movies }: MovieCardSwiperProps) {
//   return (
//     <Swiper
//       modules={[FreeMode, Autoplay, EffectFade, Navigation]}
//       effect="fade"
//       navigation
//       slidesPerView={1}
//       autoplay={{ delay: 5000 }}
//       loop
//     >
//       {movies.map((movie, index) => (
//         <SwiperSlide key={movie.title} className="flex w-auto justify-center">
//           <img
//             src={getImageUrl(movie.backdrop_path)}
//             alt={movie.title}
//             className="max-h-[80vh] w-full object-cover"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "@/app/globals.css";
// import Image from "next/image";
// import { Pagination, FreeMode, EffectFade, Navigation } from "swiper/modules";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// export default function HeroMovieCarousel({ movies }: MovieCardSwiperProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleThumbnailClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Main Swiper for large image */}
//       <Swiper
//         modules={[FreeMode, EffectFade, Navigation]}
//         effect="fade"
//         navigation
//         slidesPerView={1}
//         loop
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         initialSlide={activeIndex}
//         className="w-full"
//       >
//         {movies.map((movie, index) => (
//           <SwiperSlide key={movie.title} className="flex w-auto justify-center">
//             <img
//               src={getImageUrl(movie.backdrop_path)}
//               alt={movie.title}
//               className="max-h-[80vh] w-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnail images */}
//       <div className="mt-4 flex justify-center gap-4">
//         {movies.map((movie, index) => (
//           <div
//             key={movie.title}
//             className={`cursor-pointer ${
//               activeIndex === index
//                 ? "border-2 border-blue-500"
//                 : "border-2 border-transparent"
//             }`}
//             onClick={() => handleThumbnailClick(index)}
//           >
//             <img
//               src={getImageUrl(movie.backdrop_path)}
//               alt={movie.title}
//               className="h-20 w-36 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// // components/HeroMovieCarousel.tsx
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css";

// // Import Swiper styles
// import "swiper/css";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// // Define the types for the movie data
// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   // State to keep track of the selected movie
//   const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

//   // Function to handle when a movie is selected from the carousel
//   const handleSlideChange = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div className="hero-movie-carousel">

//       <div className="main-image-container">
//         <img
//           src={getImageUrl(selectedMovie.backdrop_path)}
//           alt={selectedMovie.title}
//           className="main-image"
//         />
//         <h2>{selectedMovie.title}</h2>
//       </div>

//       <Swiper
//         spaceBetween={10}
//         slidesPerView={4} // You can adjust this based on how many thumbnails you want to show
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {movies.map((movie) => (
//           <SwiperSlide
//             key={movie.title}
//             onClick={() => handleSlideChange(movie)}
//           >
//             <img
//               src={getImageUrl(movie.backdrop_path)}
//               alt={movie.title}
//               className="thumbnail"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

///////////////////////////////////////////////////////

// "use client";

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

//   const handleSlideChange = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative max-h-[80vh]">
//         <img
//           src={getImageUrl(selectedMovie.backdrop_path)}
//           alt={selectedMovie.title}
//         />
//       </div>
//       <div className="absolute right-[8%] top-[30%] hidden h-[600px] lg:block">
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           direction="vertical"
//           slidesPerView={4}
//           className="h-full"
//           loop
//         >
//           {movies.map((movie) => (
//             <SwiperSlide key={movie.title}>
//               <img
//                 src={getImageUrl(movie.backdrop_path)}
//                 alt={movie.title}
//                 className="h-[125px] w-[230px] cursor-pointer"
//                 onClick={() => handleSlideChange(movie)}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";
// import SwiperCore from "swiper";
// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
//   const swiperRef = useRef<SwiperCore | null>(null);

//   const handleSlideChange = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative max-h-[80vh]">
//         <img
//           src={getImageUrl(selectedMovie.backdrop_path)}
//           alt={selectedMovie.title}
//         />
//       </div>
//       <button
//         className="absolute right-[8%] top-[23%] z-10 mr-[90px] hidden bg-black/85 text-4xl text-white lg:block"
//         onClick={() => swiperRef.current?.slidePrev()}
//       >
//         &uarr;
//       </button>
//       <button
//         className="absolute bottom-[0%] right-[8%] z-10 mr-[90px] hidden bg-black/85 text-4xl text-white lg:block"
//         onClick={() => swiperRef.current?.slideNext()}
//       >
//         &darr;
//       </button>
//       <div className="absolute right-[8%] top-[30%] hidden h-[600px] lg:block">
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           direction="vertical"
//           slidesPerView={4}
//           className="h-full"
//           loop
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//         >
//           {movies.map((movie) => (
//             <SwiperSlide key={movie.title}>
//               <img
//                 src={getImageUrl(movie.backdrop_path)}
//                 alt={movie.title}
//                 // className="h-[125px] w-[230px] cursor-pointer"
//                 className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white brightness-90 transition duration-700 ${
//                   selectedMovie.title === movie.title
//                     ? "border-opacity-100"
//                     : "border-opacity-10"
//                 }`}
//                 //                     className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white object-cover brightness-90 transition xl:h-[160px] xl:w-[275px] ${
//                 //                       index === currentIndex
//                 //                         ? "border-opacity-100"
//                 //                         : "border-opacity-10"
//                 //                     } `}
//                 onClick={() => handleSlideChange(movie)}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";

// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";
// import SwiperCore from "swiper";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
//   const swiperRef = useRef<SwiperCore | null>(null);

//   const handleSlideChange = (swiper: SwiperCore) => {
//     const newIndex = swiper.activeIndex % movies.length;
//     setSelectedMovie(movies[newIndex]);
//   };

//   useEffect(() => {
//     if (swiperRef.current) {
//       setSelectedMovie(movies[swiperRef.current.realIndex]);
//     }
//   }, [movies]);

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative max-h-[80vh]">
//         <img
//           src={getImageUrl(selectedMovie.backdrop_path)}
//           alt={selectedMovie.title}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-25"></div>
//       </div>
//       <button
//         className="absolute right-[8%] top-[23%] z-10 mr-[90px] hidden bg-black/85 text-4xl text-white lg:block"
//         onClick={() => swiperRef.current?.slidePrev()}
//       >
//         &uarr;
//       </button>
//       <button
//         className="absolute bottom-[0%] right-[8%] z-10 mr-[90px] hidden bg-black/85 text-4xl text-white lg:block"
//         onClick={() => swiperRef.current?.slideNext()}
//       >
//         &darr;
//       </button>
//       <div className="absolute right-[8%] top-[30%] hidden h-[600px] lg:block">
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           direction="vertical"
//           slidesPerView={4}
//           className="h-full"
//           speed={700}
//           loop
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//             handleSlideChange(swiper);
//           }}
//           onSlideChange={handleSlideChange}
//         >
//           {movies.map((movie, index) => (
//             <SwiperSlide key={movie.title}>
//               <img
//                 src={getImageUrl(movie.backdrop_path)}
//                 alt={movie.title}
//                 className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white brightness-90 transition duration-700 ${
//                   selectedMovie.title === movie.title
//                     ? "border-opacity-100"
//                     : "border-opacity-10"
//                 }`}
//                 onClick={() => swiperRef.current?.slideTo(index)}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css/thumbs";
// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const handleSlideChange = (swiper: any) => {
//     const newIndex = swiper.activeIndex % movies.length;
//     setSelectedMovie(movies[newIndex]);
//     setThumbsSwiper(swiper);
//   };

//   useEffect(() => {
//     setSelectedMovie(movies[0]);
//   }, [movies]);

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <Swiper
//           spaceBetween={0}
//           speed={700}
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[Thumbs, EffectFade]}
//           effect="fade"
//           loop
//         >
//           {movies.map((movie, index) => (
//             <SwiperSlide key={movie.title}>
//               <img
//                 src={getImageUrl(movie.backdrop_path)}
//                 alt={movie.title}
//                 className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] block bg-black/85">
//         <button className="hero-swiper-prev text-4xl text-white">&uarr;</button>
//       </div>
//       <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] block bg-black/85">
//         <button className="hero-swiper-next text-4xl text-white">&darr;</button>
//       </div>
//       <div className="absolute right-[8%] top-[28%] hidden h-[560px] lg:block">
//         <Swiper
//           modules={[Navigation, Thumbs]}
//           navigation={{
//             nextEl: ".hero-swiper-next",
//             prevEl: ".hero-swiper-prev",
//           }}
//           direction="vertical"
//           slidesPerView={4}
//           className="thumb-swiper h-full"
//           speed={700}
//           loop
//           onSlideChange={handleSlideChange}
//         >
//           {movies.map((movie, index) => (
//             <SwiperSlide key={movie.title}>
//               <img
//                 src={getImageUrl(movie.backdrop_path)}
//                 alt={movie.title}
//                 className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white brightness-90 transition duration-700 ${
//                   selectedMovie.title === movie.title
//                     ? "border-opacity-100"
//                     : "border-opacity-10"
//                 }`}
//                 onClick={() => handleSlideChange({ activeIndex: index })}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Thumbs, EffectFade, FreeMode } from "swiper/modules";
// import "swiper/css/thumbs";
// import "@/app/globals.css";
// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={true}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             {movies.map((movie, index) => (
//               <SwiperSlide key={movie.title}>
//                 <img
//                   src={getImageUrl(movie.backdrop_path)}
//                   alt={movie.title}
//                   className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="absolute right-[8%] top-[28%] hidden h-[560px] lg:block">
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               loop={true}
//               spaceBetween={10}
//               direction="vertical"
//               slidesPerView={4}
//               freeMode={true}
//               watchSlidesProgress={true}
//               modules={[FreeMode, Navigation, Thumbs]}
//               navigation
//               className="mySwiper h-full"
//             >
//               {movies.map((movie, index) => (
//                 <SwiperSlide key={movie.title}>
//                   <img
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`h-[125px] w-[230px] cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

/* <Swiper
          spaceBetween={0}
          speed={700}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, EffectFade, Navigation]}
          navigation
          effect="fade"
          loop
          // onSlideChange={handleSlideChange}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.title}>
              <img
                src={getImageUrl(movie.backdrop_path)}
                alt={movie.title}
                className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] block bg-black/85">
        <button className="hero-swiper-prev text-4xl text-white">&uarr;</button>
      </div>
      <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] block bg-black/85">
        <button className="hero-swiper-next text-4xl text-white">&darr;</button>
      </div>
      <div className="absolute right-[8%] top-[28%] hidden h-[560px] lg:block">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            nextEl: ".hero-swiper-next",
            prevEl: ".hero-swiper-prev",
          }}
          direction="vertical"
          slidesPerView={4}
          className="thumb-swiper h-full"
          speed={700}
          loop
          onSwiper={setThumbsSwiper}
          // onSlideChange={handleSlideChange}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.title}>
              <img
                src={getImageUrl(movie.backdrop_path)}
                alt={movie.title}
                className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white brightness-90 transition duration-700 ${
                  selectedMovie.title === movie.title
                    ? "border-opacity-100"
                    : "border-opacity-10"
                }`}
                onClick={() => thumbsSwiper.slideTo(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper> */

// "use client";
// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Thumbs, EffectFade, FreeMode } from "swiper/modules";
// import "swiper/css/thumbs";
// import "@/app/globals.css";
// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <Swiper
//             className="mySwiper2"
//             loop={true}
//             slidesPerView={1}
//             onSwiper={setThumbsSwiper}
//             modules={[Thumbs]}
//           >
//             {movies.map((movie, index) => (
//               <SwiperSlide key={movie.title}>
//                 <img
//                   src={getImageUrl(movie.backdrop_path)}
//                   alt={movie.title}
//                   className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="absolute right-[8%] top-[28%] hidden h-[560px] lg:block">
//             <Swiper
//               className="mySwiper h-full"
//               loop={true}
//               slidesPerView={4}
//               direction="vertical"
//               thumbs={{ swiper: thumbsSwiper }}
//               modules={[FreeMode, Thumbs, Navigation]}
//               navigation
//             >
//               {movies.map((movie, index) => (
//                 <SwiperSlide key={movie.title}>
//                   <img
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`h-[125px] w-[230px] cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";
// import "swiper/css/thumbs";
// import "@/app/globals.css";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const handleSlideChange = (swiper: any) => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideTo(swiper.activeIndex);
//     }
//   };

//   const handleThumbnailClick = (index: number) => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideTo(index);
//     }
//   };
//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <Swiper
//             className="mySwiper2"
//             loop={true}
//             slidesPerView={1}
//             modules={[Thumbs, Navigation]}
//             navigation
//             thumbs={{ swiper: thumbsSwiper }}
//             onSlideChange={handleSlideChange}
//           >
//             {movies.map((movie) => (
//               <SwiperSlide key={movie.title}>
//                 <img
//                   src={getImageUrl(movie.backdrop_path)}
//                   alt={movie.title}
//                   className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="absolute right-[8%] top-[28%] hidden h-[560px] lg:block">
//             <Swiper
//               className="mySwiper h-full"
//               loop={true}
//               slidesPerView={4}
//               direction="vertical"
//               onSwiper={setThumbsSwiper}
//               modules={[FreeMode, Thumbs]}
//             >
//               {movies.map((movie, index) => (
//                 <SwiperSlide
//                   key={movie.title}
//                   onClick={() => handleThumbnailClick(index)}
//                 >
//                   <img
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`h-[125px] w-[230px] cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import { Navigation, Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css/thumbs";
// import "@/app/globals.css";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const handleSlideChange = (swiper: any) => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideTo(swiper.activeIndex);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-prev text-4xl text-white">
//               &uarr;
//             </button>
//           </div>
//           <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-next text-4xl text-white">
//               &darr;
//             </button>
//           </div>
//           <Swiper
//             className="mySwiper2"
//             slidesPerView={1}
//             modules={[Thumbs, Navigation, EffectFade]}
//             navigation={{
//               nextEl: ".hero-swiper-next",
//               prevEl: ".hero-swiper-prev",
//             }}
//             effect="fade"
//             thumbs={{ swiper: thumbsSwiper }}
//             onSlideChange={handleSlideChange}
//           >
//             {movies.map((movie) => (
//               <SwiperSlide key={movie.title}>
//                 <img
//                   src={getImageUrl(movie.backdrop_path)}
//                   alt={movie.title}
//                   className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="absolute right-[8%] top-[28%] hidden h-[560px] w-[230px] lg:block">
//             <Swiper
//               className="mySwiper h-full w-full"
//               spaceBetween={10}
//               slidesPerView={4}
//               direction="vertical"
//               onSwiper={setThumbsSwiper}
//               modules={[Thumbs]}
//             >
//               {movies.map((movie, index) => (
//                 <SwiperSlide key={movie.title} className="h-[125px] w-[230px]">
//                   <img
//                     loading="lazy"
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

//"use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import { Navigation, Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css/thumbs";
// import "@/app/globals.css";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const handleSlideChange = (swiper: any) => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideTo(swiper.activeIndex);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-prev text-4xl text-white">
//               &uarr;
//             </button>
//           </div>
//           <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-next text-4xl text-white">
//               &darr;
//             </button>
//           </div>
//           <Swiper
//             className="mySwiper2"
//             slidesPerView={1}
//             modules={[Thumbs, Navigation, EffectFade]}
//             navigation={{
//               nextEl: ".hero-swiper-next",
//               prevEl: ".hero-swiper-prev",
//             }}
//             effect="fade"
//             thumbs={{ swiper: thumbsSwiper }}
//             onSlideChange={handleSlideChange}
//           >
//             {movies.map((movie) => (
//               <SwiperSlide key={movie.title}>
//                 <img
//                   src={getImageUrl(movie.backdrop_path)}
//                   alt={movie.title}
//                   className={`max-h-[80vh] w-full brightness-90 transition duration-700`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="absolute right-[8%] top-[28%] hidden h-[560px] w-[230px] lg:block">
//             <Swiper
//               className="mySwiper h-full w-full"
//               spaceBetween={10}
//               slidesPerView={4}
//               direction="vertical"
//               onSwiper={setThumbsSwiper}
//               modules={[Thumbs]}
//             >
//               {movies.map((movie, index) => (
//                 <SwiperSlide key={movie.title} className="h-[125px] w-[230px]">
//                   <img
//                     loading="lazy"
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css/thumbs";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "@/app/globals.css";

// // import "swiper/swiper-bundle.css";
// import "swiper/react";
// import "swiper/css";

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// type ExtraDetails = {
//   [key: string]: any;
// };

// type Movie = {
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
//   extraDetails: ExtraDetails;
// };

// type MovieCardSwiperProps = {
//   movies: Movie[];
// };

// const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   const handleSlideChange = (swiper: any) => {
//     if (thumbsSwiper) {
//       thumbsSwiper.slideTo(swiper.activeIndex);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-end">
//       <div className="relative h-full max-h-[80vh] w-full">
//         <>
//           <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-prev text-4xl text-white">
//               &uarr;
//             </button>
//           </div>
//           <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] hidden bg-black/85 lg:block">
//             <button className="hero-swiper-next text-4xl text-white">
//               &darr;
//             </button>
//           </div>
//           <Swiper
//             className="mySwiper2"
//             slidesPerView={1}
//             modules={[Thumbs, Navigation, EffectFade]}
//             navigation={{
//               nextEl: ".hero-swiper-next",
//               prevEl: ".hero-swiper-prev",
//             }}
//             effect="fade"
//             thumbs={{
//               swiper:
//                 thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//             }}
//             onSlideChange={handleSlideChange}
//           >
//             {movies.map((movie) => (
//               <SwiperSlide key={movie.title}>
//                 <div className="aspect-w-16 aspect-h-9 relative max-h-[80vh]">
//                   <img
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className="object-cover brightness-90 transition duration-700"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="absolute right-[8%] top-[30%] hidden h-[70%] w-[230px] lg:block">
//             <Swiper
//               className="mySwiper h-full w-full"
//               spaceBetween={0}
//               slidesPerView={3}
//               direction="vertical"
//               onSwiper={setThumbsSwiper}
//               modules={[Thumbs]}
//               breakpoints={{
//                 1400: {
//                   slidesPerView: 4,
//                 },
//               }}
//             >
//               {movies.map((movie) => (
//                 <SwiperSlide key={movie.title} className="h-[125px] w-[230px]">
//                   <img
//                     // loading="lazy"
//                     src={getImageUrl(movie.backdrop_path)}
//                     alt={movie.title}
//                     className={`cursor-pointer brightness-90 transition duration-700`}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default HeroMovieCarousel;

"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/app/globals.css";

import "swiper/react";
import "swiper/css";

const getImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/original/${path}`;

type ExtraDetails = {
  [key: string]: any;
};

type Movie = {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  extraDetails: ExtraDetails;
};

type MovieCardSwiperProps = {
  movies: Movie[];
};

const HeroMovieCarousel: React.FC<MovieCardSwiperProps> = ({ movies }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track active slide index

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // Update active slide index
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(swiper.activeIndex);
    }
  };

  return (
    <div className="relative flex items-center justify-end">
      <div className="relative h-full max-h-[80vh] w-full">
        <>
          <div className="absolute right-[8%] top-[23%] z-50 -ml-16 mr-[90px] hidden bg-black/85 lg:block">
            <button className="hero-swiper-prev text-4xl text-white">
              &uarr;
            </button>
          </div>
          <div className="absolute bottom-[0%] right-[8%] z-50 mr-[90px] hidden bg-black/85 lg:block">
            <button className="hero-swiper-next text-4xl text-white">
              &darr;
            </button>
          </div>
          <Swiper
            className="mySwiper2"
            slidesPerView={1}
            modules={[Thumbs, Navigation, EffectFade]}
            navigation={{
              nextEl: ".hero-swiper-next",
              prevEl: ".hero-swiper-prev",
            }}
            effect="fade"
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={handleSlideChange}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.title}>
                <div className="aspect-w-16 aspect-h-9 relative max-h-[80vh]">
                  <img
                    src={getImageUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="object-cover brightness-90 transition duration-700"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute right-[8%] top-[30%] hidden h-[70%] w-[230px] lg:block">
            <Swiper
              className="mySwiper h-full w-full"
              spaceBetween={0}
              slidesPerView={3}
              direction="vertical"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              breakpoints={{
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {movies.map((movie, index) => (
                <SwiperSlide key={movie.title} className="h-[125px] w-[230px]">
                  <img
                    src={getImageUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className={`cursor-pointer border-[3px] border-white brightness-90 transition duration-700 ${
                      index === activeIndex
                        ? "border-opacity-100"
                        : "border-opacity-10"
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      </div>
    </div>
  );
};

export default HeroMovieCarousel;
