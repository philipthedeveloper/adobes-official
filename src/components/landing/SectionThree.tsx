import classNames from "classnames";
import styled from "styled-components";
import { LinkButton } from "../reusables";
import { ArticleCard } from "./ArticleCard";

const sectionData = [
  {
    iconName: "fi fi-sr-sticker",
    title: "generic offers that don't resonate with your ideal client",
    description:
      "If you run the identical offer as every competitor, your firm will become commoditized, which will raise costs and drastically lower lead quality.",
  },
  {
    iconName: "fi fi-sr-meeting-alt",
    title: "No Follow Up System",
    description:
      " You will get much fewer leads that become appointments if your phone is not answered around-the-clock and you do not contact leads within five minutes.",
  },
  {
    iconName: "fi fi-sr-calculator-money",
    title: "Inadequate Post-Estimate Follow-Up Systems",
    description:
      "Many clients lose up to 15% of business due to delayed follow-ups after providing estimates.",
  },
  {
    iconName: "fi fi-sr-data-transfer",
    title: "Wrong Marketing Platform",
    description:
      "Choosing the incorrect marketing platform to display your advertisements on, rather than promoting where your clients are most densely concentrated.",
  },
  {
    iconName: "fi fi-sr-improve-user",
    title: "Weak Ad Optimization Strategy",
    description:
      "Optimizing ads weekly, rather than using a data-driven approach, hinders performance. Without testing creatives and offers, long-term results suffer.",
  },
];

export const SectionThree = () => {
  return (
    <div className="my-20 md:my-24 relative z-10">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-semibold text-gray-300 text-2xl md:text-3xl">
            Why is your Marketing
          </span>
          <span className="font-light text-[var(--base-color)] text-xl md:text-2xl">
            Not Performing?
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-12 sm:mt-16 md:mt-20">
        <GridEl>
          {sectionData.map((data) => (
            <ArticleCard {...data} />
          ))}
        </GridEl>
      </div>

      {/* Survey form */}
      <LinkButton
        className="capitalize rounded-lg text-sm w-full max-w-[350px] mx-auto mt-8"
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
  gap: 2rem;

  @media screen and (min-width: 992px) {
    gap: 4rem 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
