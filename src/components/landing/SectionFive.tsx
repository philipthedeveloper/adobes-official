import faqs from "@/data/faq";
import styled from "styled-components";
import Accordion from "../Accordion";

type Props = {};
export const SectionFive = ({}: Props) => {
  return (
    <div className="my-20 md:my-24 relative z-10">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl">
            Frequently Asked Questions
          </span>
          <span className="font-light text-gray-300 text-xl md:text-2xl">
            Let's start here - because we value honesty & transparency.
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <GridEl>
          {faqs.map((faq) => (
            <Accordion data={faq} />
          ))}
        </GridEl>
      </div>
    </div>
  );
};

const GridEl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0rem 2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
