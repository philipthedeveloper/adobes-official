import { LinkButton } from "../reusables";

type Props = {};
export const Intro = ({}: Props) => {
  return (
    <div className="col-start-1 col-span-1 h-full flex items-center row-start-3 mt-8 sm:mt-12 md:row-start-2 md:mt-0 w-full md:w-4/5 mx-auto">
      <div className="max-w-[500px] flex flex-col mx-auto md:mx-0">
        <h1
          className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.4rem] text-[var(--base-color)] text-left sm:text-center md:text-left rotate-in"
          style={{ lineHeight: "1.2" }}
        >
          10X your business <br className="hidden md:block" />
          ROI today
        </h1>
        <div className="overflow-hidden h-max">
          <p
            className="capitalize mt-5 md:text-xl text-gray-100 font-semibold max-w-[440px] text-left sm:text-center md:text-left fade-in-no-delay"
            style={{ lineHeight: "1.5" }}
          >
            {"GET YOUR OWN TRAFFIC-GENERATION INBOUND LEAD SYSTEM & SECURE NEW PROJECTS/ClIENTS EVERY 30 DAYS OR IT'S FREE".toLowerCase()}
          </p>

          <p className="font-semibold text-xs md:text-[16px] text-gray-300 opacity-80 mt-4 sm:text-center md:text-left fade-in-no-delay">
            Pay-Per-Project
          </p>

          <p className="font-semibold text-xs md:text-[16px] text-gray-300 opacity-80 mt-2 text-left sm:text-center md:text-left fade-in-no-delay">
            The #1 Way to Close New Projects during high interest rate periods
          </p>
        </div>

        <LinkButton
          className="capitalize rounded-lg py-3 px-4 sm:px-7 text-sm w-full max-w-[350px] sm:mx-auto md:mx-0 bg-[var(--base-color)] text-white mt-6 cursor-pointer hover:opacity-70 transition-opacity duration-300 text-center"
          href="/survey"
        >
          Start your Marketing Journey Now
        </LinkButton>
      </div>
    </div>
  );
};
