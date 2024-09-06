import { HiPlayCircle } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import HeroButton from "@/components/Hero Components/HeroButton";

type Movie = {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

export default function HeroDesktopActions({ movie }: { movie: Movie }) {
  return (
    <div key={movie.title} className="opacity-0 transform translate-y-10 animate-fade-in-up delay-300">
      <HeroButton
        icon={HiPlayCircle}
        text="watch trailer"
        className="mb-[16px] bg-main-color hover:bg-main-color-dark active:bg-main-color-darkest"
        onClick={undefined}
      />
      <HeroButton
        icon={FaCirclePlus}
        text="add to list"
        className="bg-secondary-color hover:bg-secondary-color-dark active:bg-secondary-color-darkest"
        onClick={undefined}
      />
    </div>
  );
}
