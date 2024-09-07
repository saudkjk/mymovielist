// import React, { MutableRefObject } from "react";

// type HeroBackgroundImageProps = {
//   movies: { backdrop_path: string }[];
//   currentIndex: number;
//   isTransitioning: boolean;
//   prevCurrentRef: MutableRefObject<number>;
// };

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// const HeroBackgroundImage: React.FC<HeroBackgroundImageProps> = ({
//   movies,
//   currentIndex,
//   isTransitioning,
//   prevCurrentRef,
// }) => {
//   return (
//     <>
//       <img
//         src={getImageUrl(
//           prevCurrentRef.current === -1
//             ? movies[(currentIndex - 1 + movies.length) % movies.length]
//                 .backdrop_path
//             : movies[(prevCurrentRef.current + movies.length) % movies.length]
//                 .backdrop_path,
//         )}
//         alt="Transitioning Slide"
//         className={`absolute inset-0 max-h-[80vh] w-full object-cover transition-all ${
//           isTransitioning ? "duration-0" : "opacity-0 duration-700"
//         }`}
//       />
//       <img
//         src={getImageUrl(movies[currentIndex].backdrop_path)}
//         alt={`Slide ${currentIndex + 1}`}
//         className="max-h-[80vh] w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//     </>
//   );
// };

// export default HeroBackgroundImage;

// import React from "react";

// type HeroBackgroundImageProps = {
//   movies: { backdrop_path: string }[];
//   currentIndex: number;
// };

// const getImageUrl = (path: string) =>
//   `https://image.tmdb.org/t/p/original/${path}`;

// const HeroBackgroundImage: React.FC<HeroBackgroundImageProps> = ({
//   movies,
//   currentIndex,
// }) => {
//   return (
//     <>
//       <img
//         src={getImageUrl(movies[currentIndex].backdrop_path)}
//         alt={`Slide ${currentIndex + 1}`}
//         className="max-h-[80vh] w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//     </>
//   );
// };

// export default HeroBackgroundImage;
