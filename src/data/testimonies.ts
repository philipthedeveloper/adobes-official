import resultOne from "@/assets/images/results/result-one.jpg";
import resultTwo from "@/assets/images/results/result-two.jpg";
import resultThree from "@/assets/images/results/result-three.jpg";
import resultFour from "@/assets/images/results/result-four.jpg";
import resultFive from "@/assets/images/results/result-five.jpg";

export interface Result {
  imgUrl: string;
}

export const results: Result[] = [
  {
    imgUrl: resultOne,
  },
  {
    imgUrl: resultTwo,
  },
  {
    imgUrl: resultThree,
  },
  {
    imgUrl: resultFour,
  },
  {
    imgUrl: resultFive,
  },
];

export interface Testimony {
  authorInfo: {
    name: string;
    bio: string;
  };
  comment: string;
  rating: number;
}

export const testimonies: Testimony[] = [
  {
    authorInfo: {
      name: "Emma R",
      bio: "CEO - Trendsetters Inc.",
    },
    comment:
      "Adobe Marketing Agency Revolutionised our Brand's Market Position Their thinking outside the box combined with their data centric strategies brought us results we never imagined. We couldn't be happier!",
    rating: 4.5,
  },
  {
    authorInfo: {
      name: "Sarah L.",
      bio: "Founder of BrightFuture Ventures",
    },
    comment:
      "Engaging with Adobe's Marketing Agency changed the game for us. Their work has been innovative and with a quality mindset which made them the ideal partner to our marketing.",
    rating: 4,
  },
  {
    authorInfo: {
      name: "John D.",
      bio: "Marketing Director at GlobalTech Solutions",
    },
    comment:
      "Their dedication to helping us succeed and the innovative tactics they deployed have played an instrumental role in our continued business expansion.",
    rating: 5,
  },
  {
    authorInfo: {
      name: "Michael T.",
      bio: "COO of Horizon Enterprises",
    },
    comment:
      "Results are evidence in themselves. Every time we turned around, Adobe's Creative Agency outperformed itself and produced campaigns that went above our expectations.",
    rating: 5,
  },
];
