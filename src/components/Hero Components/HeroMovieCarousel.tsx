import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type ExtraDetails = {
  [key: string]: any;
};

type HeroMovieCarouselProps = {
  movies: {
    title: string | undefined;
    extraDetails: ExtraDetails;
  }[];
  currentIndex: number;
  handleScrollTo: (index: number) => void;
  setApi: (api: CarouselApi) => void;
};

const HeroMovieCarousel: React.FC<HeroMovieCarouselProps> = ({
  movies,
  currentIndex,
  handleScrollTo,
  setApi,
}) => {
  return (
    <div className="group hidden lg:block">
      <div className="absolute right-[8%] top-[30%] z-10 flex">
        <button
          onClick={() => handleScrollTo(currentIndex - 1)}
          className="absolute z-10 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
        >
          <span className="w-[230px] pb-2 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
            ▲
          </span>
        </button>
        <Carousel
          setApi={setApi}
          plugins={
            [
              // Autoplay({
              //   delay: 2000,
              // }),
            ]
          }
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className=""
        >
          <CarouselContent className="h-[550px] xl:h-[600px]">
            {movies.map((movie, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div className="">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.extraDetails.images.backdrops[0].file_path}`}
                    onClick={() => handleScrollTo(index)}
                    className={`h-[125px] w-[230px] cursor-pointer border-[3px] border-white object-cover brightness-90 transition xl:h-[160px] xl:w-[275px] ${
                      index === currentIndex
                        ? "border-opacity-100"
                        : "border-opacity-10"
                    } `}
                    alt={movie.title}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <button
        onClick={() => handleScrollTo(currentIndex + 1)}
        className="absolute right-[8%] z-10 -mt-9 w-[230px] justify-center bg-black/40 opacity-0 transition-all duration-300 ease-in-out hover:bg-black/60 group-hover:opacity-100 lg:flex xl:w-[275px]"
      >
        <span className="w-[230px] pb-1 pt-2 transition-transform duration-300 ease-in-out hover:scale-125 xl:w-[275px]">
          ▼
        </span>
      </button>
    </div>
  );
};

export default HeroMovieCarousel;
