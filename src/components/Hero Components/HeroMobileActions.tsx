import { HiPlayCircle } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import HeroButton from "@/components/Hero Components/HeroButton";

type Movie = {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
};
export default function HeroMobileActions({ movie }: { movie: Movie }) {
  return (
    <>
      <div className="mx-[4%] my-2 flex items-center gap-2">
        <HeroButton
          icon={HiPlayCircle}
          text="watch trailer"
          className="flex-1 bg-main-color hover:bg-main-color-dark active:bg-main-color-darkest"
          onClick={undefined}
        />
        <HeroButton
          icon={FaCirclePlus}
          text="add to list"
          className="flex-1 bg-secondary-color hover:bg-secondary-color-dark active:bg-secondary-color-darkest"
          onClick={undefined}
        />
      </div>
      <hr className="border-b border-secondary-color md:hidden" />
    </>
  );
}
