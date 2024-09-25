import styled from "styled-components";
import { results } from "@/data/testimonies";
import resultVideo from "@/assets/videos/Garage-Floors-of-Austin-Marketing-Analysis.mp4";
import resultPoster from "@/assets/posters/result-poster.png";
import { LinkButton } from "../reusables";
import LightBox from "../LightBox";
import { useState } from "react";

type Props = {};
export const SectionFour = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const openLightBox = () => setIsLightBoxOpen(true);
  const closeLightBox = () => setIsLightBoxOpen(false);

  const handleResultClicked = (index: number) => {
    setCurrentIndex(index);
    openLightBox();
  };

  return (
    <div className="my-20 md:my-24 relative z-10">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl">
            {/* Testimonials */}
            Some Explosive Result
          </span>
          <span className="font-light text-gray-300 text-xl md:text-2xl">
            What you can expect
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <GridEl>
          {results.map((result, i) => (
            <div
              className="image-cont rounded-[8px] fade-up-card delay-200 opacity-40 translate-x-6 translate-y-20 cursor-pointer p-2 bg-[#0d0d0d] relative"
              style={{
                transition: "transform 0.5s, opacity 0.7s ease",
              }}
              onClick={() => handleResultClicked(i)}
            >
              <div className="absolute w-full h-full z-10 bg-[#0d0d0d] bg-opacity-30 hover:bg-opacity-0"></div>
              <img
                src={result.imgUrl}
                className="w-full h-auto object-cover rounded-[5px]"
              />
            </div>
          ))}
        </GridEl>
      </div>

      {isLightBoxOpen && (
        <LightBox
          images={results}
          isOpen={isLightBoxOpen}
          onClose={closeLightBox}
          defaultIdx={currentIndex}
        />
      )}

      {/* Survey form */}
      <LinkButton
        href="/survey"
        className="capitalize rounded-lg text-sm w-full max-w-[350px] mx-auto mt-8"
      >
        Start your Marketing Journey Now
      </LinkButton>
    </div>
  );
};

const GridEl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem 2.2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .image-cont {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1),
      0px 6px 25px rgba(0, 0, 0, 0.15);
  }
`;
