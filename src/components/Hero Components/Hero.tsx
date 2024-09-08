// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { type CarouselApi } from "@/components/ui/carousel";
// import HeroBackgroundImage from "@/components/Hero Components/HeroBackgroundImage";
// import HeroMovieCarousel from "@/components/Hero Components/HeroMovieCarousel";
// import HeroMovieInfo from "@/components/Hero Components/HeroMovieInfo";
// import HeroDesktopActions from "@/components/Hero Components/HeroDesktopActions";
// import HeroMobileActions from "@/components/Hero Components/HeroMobileActions";

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

// type HeroProps = {
//   movies: Movie[];
// };

// const Hero: React.FC<HeroProps> = ({ movies }) => {
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
//           <HeroBackgroundImage
//             movies={movies}
//             currentIndex={currentIndex}
//             isTransitioning={isTransitioning}
//             prevCurrentRef={prevCurrentRef}
//           />

//           <HeroMovieCarousel
//             movies={movies}
//             currentIndex={currentIndex}
//             handleScrollTo={handleScrollTo}
//             setApi={setApi}
//           />
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

// export default Hero;
"use client";
import React, { useState } from "react";
// import HeroBackgroundImage from "@/components/Hero Components/HeroBackgroundImage";
import HeroMovieCarousel from "@/components/Hero Components/HeroMovieCarousel";
import HeroMovieInfo from "@/components/Hero Components/HeroMovieInfo";
import HeroDesktopActions from "@/components/Hero Components/HeroDesktopActions";
import HeroMobileActions from "@/components/Hero Components/HeroMobileActions";

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

type HeroProps = {
  movies: Movie[];
};

const Hero: React.FC<HeroProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="flex items-end overflow-hidden md:items-center">
        <div className="relative w-full">
          <HeroMovieCarousel movies={movies} />
        </div>

        <div className="absolute z-50 m-2 mx-[4%] flex flex-col items-start justify-center md:mx-[8%] md:w-[50%] md:gap-[0px] lg:w-[440px]">
          <HeroMovieInfo movie={movies[currentIndex]} />
          <div className="hidden md:block">
            <HeroDesktopActions movie={movies[currentIndex]} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <HeroMobileActions movie={movies[currentIndex]} />
      </div>
    </>
  );
};

export default Hero;
