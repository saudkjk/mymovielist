// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import HeroMovieInfo from "./Hero Components/HeroMovieInfo";
// import HeroDesktopActions from "./Hero Components/HeroDesktopActions";
// import HeroMobileActions from "./Hero Components/HeroMobileActions";

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

// type MovieCarouselProps = {
//   movies: Movie[];
// };

// const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
//   const [api, setApi] = useState<CarouselApi>();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const prevCurrentRef = useRef<number>(-1);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handleScrollTo = (index: number) => {
//     if (!api) return;
//     prevCurrentRef.current = api.selectedScrollSnap();
//     api.scrollTo(index);
//   };

//   useEffect(() => {
//     if (!api) return;

//     const handleTransition = () => {
//       setCurrentIndex(api.selectedScrollSnap());
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 100);
//     };

//     handleTransition();
//     api.on("select", handleTransition);

//     return () => {
//       api.off("select", handleTransition);
//     };
//   }, [api]);

//   return (
//     <>
//       <div className="flex items-end overflow-hidden md:items-center">
//         <div className="relative w-full">
//           <img
//             src={getImageUrl(
//               prevCurrentRef.current === -1
//                 ? movies[(currentIndex - 1 + movies.length) % movies.length]
//                     .backdrop_path
//                 : movies[
//                     (prevCurrentRef.current + movies.length) % movies.length
//                   ].backdrop_path,
//             )}
//             alt="Transitioning Slide"
//             className={`absolute inset-0 max-h-[80vh] w-full object-cover transition-all ${
//               isTransitioning ? "duration-0" : "opacity-0 duration-700"
//             }`}
//           />
//           <img
//             src={getImageUrl(movies[currentIndex].backdrop_path)}
//             alt={`Slide ${currentIndex + 1}`}
//             className={`max-h-[80vh] w-full object-cover`}
//           />

//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//           <div className="group hidden lg:block">
//             <div className="absolute right-[8%] top-[30%] z-10 flex">
//               <button
//                 onClick={() => handleScrollTo(currentIndex - 1)}
//                 className="absolute z-10 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
//               >
//                 <span className="w-[230px] pb-2 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
//                   ▲
//                 </span>
//               </button>
//               <Carousel
//                 setApi={setApi}
//                 plugins={
//                   [
//                     // Autoplay({
//                     //   delay: 2000,
//                     // }),
//                   ]
//                 }
//                 opts={{
//                   align: "start",
//                   loop: true,
//                 }}
//                 orientation="vertical"
//                 className=""
//               >
//                 <CarouselContent className="h-[550px] xl:h-[600px]">
//                   {movies.map((movie, index) => (
//                     <CarouselItem key={index} className="basis-1/4">
//                       <div className="">
//                         <img
//                           src={`https://image.tmdb.org/t/p/original/${movie.extraDetails.images.backdrops[0].file_path}`}
//                           onClick={() => handleScrollTo(index)}
//                           className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white object-cover brightness-90 transition xl:h-[160px] xl:w-[275px] ${
//                             index === currentIndex
//                               ? "border-opacity-100"
//                               : "border-opacity-10"
//                           } `}
//                           alt={movie.title}
//                         />
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//               </Carousel>
//             </div>

//             <button
//               onClick={() => handleScrollTo(currentIndex + 1)}
//               className="absolute right-[8%] z-10 -mt-9 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
//             >
//               <span className="w-[230px] pb-1 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
//                 ▼
//               </span>
//             </button>
//           </div>
//         </div>

//         <div className="absolute m-2 mx-[4%] flex flex-col items-start justify-center md:mx-[8%] md:w-[50%] md:gap-[0px] lg:w-[440px]">
//           <HeroMovieInfo movie={movies[currentIndex]} />
//           <div className="hidden md:block">
//             <HeroDesktopActions movie={movies[currentIndex]} />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col md:hidden">
//         <HeroMobileActions movie={movies[currentIndex]} />
//       </div>
//     </>
//   );
// };

// export default MovieCarousel;
