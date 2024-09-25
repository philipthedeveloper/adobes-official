import { Testimony } from "@/data/testimonies";
import noiseBg from "@/assets/images/noise-bg.png";
import { Rating } from "../Rating";
import { QuoteIcon } from "lucide-react";

type Props = {
  data: Testimony;
};
export const TestimonyCard = ({ data }: Props) => {
  const {
    authorInfo: { bio, name },
    comment,
    rating,
  } = data;

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
      <div className="h-full flex flex-col">
        <h3 className="font-bold text-xl text-white">{name}</h3>
        <div className="flex items-center gap-1 my-2">
          <Rating rating={rating} />
        </div>
        <p className="text-gray-300 font-normal my-2 mt-3 text-sm leading-relaxed flex-1">
          <span className="text-base text-white inline-block">&ldquo;</span>{" "}
          {comment}{" "}
          <span className="text-base text-white inline-block">&rdquo;</span>
        </p>
        <p className="text-white flex items-center text-xs gap-4 justify-end mt-6 italic">
          <span className="h-[2px] flex-1 bg-white rounded-full max-w-20"></span>
          <span className="italic font-semibold text-white">{bio}</span>
        </p>
      </div>
    </div>
  );
};
