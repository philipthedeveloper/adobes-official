import { Intro } from "./Intro";
import pageBackground from "@/assets/svgs/page-background-sm.svg";
import businessGrowth from "@/assets/svgs/growth.svg";
import adobesLogo from "@/assets/images/logo.png";

type Props = {};
export const Hero = ({}: Props) => {
  return (
    <div className="w-full min-h-dvh md:min-h-[75dvh] lg:min-h-[85dvh] h-auto relative overflow-hidden">
      {/* Background */}
      <div className="w-[115%] md:w-full h-[90%] lg:h-[85%] top-0 right-0 absolute justify-end items-start z-0 hidden md:flex">
        <img
          src={pageBackground}
          alt=""
          className="w-[120%] sm:w-auto h-auto md:h-full object-contain"
        />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto max-w-screen-xl grid-cols h-full min-h-dvh md:min-h-[75dvh] lg:min-h-[85dvh] grid grid-cols-1 md:grid-cols-2 z-20 relative">
        {/* Header */}
        <div className="w-full col-span-1 col-start-1 row-start-1 md:gap-8">
          <header className="pt-4 md:pt-8 ">
            <div>
              <a href="/">
                <img src={adobesLogo} className="max-h-16 md:max-h-28" />
              </a>
            </div>
          </header>
        </div>

        {/* Info */}
        <Intro />

        {/* Image */}
        <div className="col-start-1 md:col-start-2 row-start-2 col-span-1 h-full mt-0 md:mt-0 rounded-2xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-12 px-6 py-8">
            <img
              className="w-full max-h-[450px] object-contain lg:max-h-[500px]"
              src={businessGrowth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
