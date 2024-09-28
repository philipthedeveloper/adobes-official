import {
  SectionFive,
  SectionFour,
  SectionThree,
  SectionTwo,
  Testimonials,
  Hero,
} from "@/components";
import noiseBg from "@/assets/images/noise-bg.png";

type Props = {};
export const Landing = ({}: Props) => {
  return (
    <>
      <div
        className="w-full h-full fixed z-0 opacity-[0.02] top-0 left-0 bottom-0 right-0"
        style={{ background: `url(${noiseBg})` }}
      ></div>

      {/* Page Hero */}
      <Hero />

      <div className="w-[90%] lg:w-[80%] mx-auto">
        <Testimonials />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <div className="w-full h-[200px] bg-[var(--base-color-darker)] relative z-10">
        <div className="flex flex-col justify-center md:flex-row items-center md:justify-between gap-6 w-[90%] lg:w-[80%] mx-auto h-full">
          <p className="text-center text-white md:text-2xl">
            All right Reserved. &copy; 2020 - 2024 Adobes Marketing Agency
          </p>

          {/* Socials */}
          <div className="text-white flex items-center gap-5 justify-center">
            <a
              target="_blank"
              href="https://www.instagram.com/adobesmarketingagency"
            >
              <i className="fi fi-brands-instagram flex text-2xl"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/share/uQ7rULqDUTvr3Pif/?mibextid=qi2Omg"
            >
              <i className="fi fi-brands-facebook flex text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aramide-ojo-18298a208"
              target="_blank"
            >
              <i className="fi fi-brands-linkedin flex text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
