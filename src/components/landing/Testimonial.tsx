import styled from "styled-components";
import { testimonies } from "@/data/testimonies";
import { LinkButton } from "../reusables";
import { TestimonyCard } from "./TestimonyCard";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type Props = {};
export const Testimonials = ({}: Props) => {
  return (
    <div className="my-20 md:my-24 relative z-10">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl">
            Testimonials
          </span>
          <span className="font-light text-gray-300 text-xl md:text-2xl">
            What our clients have to say
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <Slider {...sliderSettings}>
          {testimonies.map((testimony) => (
            <TestimonyCard data={testimony} />
          ))}
        </Slider>
      </div>
      <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl mx-auto block mt-8 mb-1 text-center">
        Want to learn more?
      </span>
      <span className="font-light text-gray-300 text-xl md:text-2xl text-center mx-auto block mb-6">
        Reach out to us
      </span>
      <LinkButton
        className="capitalize rounded-lg text-sm w-full max-w-[350px] mx-auto"
        href="/survey"
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
