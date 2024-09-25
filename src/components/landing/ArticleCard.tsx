import { Testimony } from "@/data/testimonies";
import noiseBg from "@/assets/images/noise-bg.png";
import { Rating } from "../Rating";
import { QuoteIcon } from "lucide-react";
import classNames from "classnames";

type Props = {
  iconName: string;
  title: string;
  description: string;
};
export const ArticleCard = ({ iconName, title, description }: Props) => {
  return (
    <div
      className="w-full rounded-[5px] p-5 py-6 sm:p-6 bg-[#0d0d0d] fade-up-card relative overflow-hidden h-72 opacity-0 translate-y-20 delay-200"
      style={{
        transition: "transform 0.5s, opacity 0.7s ease",
        boxShadow: "2px 2px 4px rgba(15, 15, 15, 0.7)",
      }}
    >
      <div
        className="w-full h-full absolute z-1 opacity-[0.005] top-0 left-0"
        style={{
          backgroundImage: `url(${noiseBg})`,
        }}
      ></div>
      <div className="h-full flex flex-col justify-start">
        <div className="base-color-trans-bg w-10 min-h-10 rounded-full grid place-items-center">
          <i
            className={classNames(
              iconName,
              "flex text-xl text-[var(--base-color)]"
            )}
          ></i>
        </div>

        <div className="mt-7">
          <h3 className="font-bold text-xl text-white capitalize">{title}</h3>
          <p className="text-gray-300 font-normal text-sm leading-relaxed flex-1 mt-2">
            {description}
          </p>
        </div>

        <div className="h-4"></div>
      </div>
    </div>
  );
};
