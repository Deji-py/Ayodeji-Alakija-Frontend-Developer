import Button from "../../../components/Button/Button";
import GalaxyImage from "../../../assets/images/rocket1.jpg";
import SearchForm_section from "./SearchForm_section";
import SuggestedCategories from "../../../components/Suggested Categories/SuggestedCategories";
import { useEffect, useState } from "react";

function Banner_Section() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgParallax = scrollY * 0.2;

  return (
    <section className="h-[500px] relative overflow-hidden flex flex-row justify-center items-center bg-gray-300">
      <div
        style={{
          transform: `translateY(${bgParallax}px) `,
        }}
        className="w-full overflow-hidden bg-black h-full flex flex-col justify-between items-center text-white bg-gradient-to-b"
      >
        <img
          src={GalaxyImage}
          alt="galaxy-image"
          className="opacity-[0.5] object-cover object-top w-full h-full"
        />
      </div>
      <div className="absolute z-[100] pt-20 text-white md:top-0 top-[-55px] w-full h-full ">
        <div className="left w-full h-full flex flex-col justify-center items-center flex-1 ">
          <h2 className="text-4xl">Explore</h2>
          <h2 className="text-6xl">SpaceX</h2>
          <h3 className="text-2xl">Rockets</h3>
          <div className="text-center mt-5 justify-center flex flex-col items-center gap-5">
            <div>
              <p className="w-[500px] md:w-full  md:px-10 ">
                Discover detailed information about spaceX rockets , from
                specifications to launch history
              </p>
            </div>
          </div>
          <SearchForm_section />
        </div>
      </div>
    </section>
  );
}

export default Banner_Section;
