import leadFunnel from "@/assets/images/lead-funnel-2.png";
import leadFunnelEdit from "@/assets/images/lead-funnel-edit.png";
import styled from "styled-components";

type Props = {};
export const SectionTwo = ({}: Props) => {
  return (
    <div className="my-20 md:my-24 relative z-10">
      <div className="flex justify-center max-h-[700px] items-center">
        <Container
          className="w-full aspect-square max-h-[600px] max-w-[600px] bg-no-repeat rounded-full flex justify-center items-center fade-up-card delay-200 opacity-40 translate-x-6 translate-y-20"
          style={{
            background: `url(/imgs/page-bg-base-grad-2.svg)`,
            transition: "transform 0.5s, opacity 0.7s ease",
          }}
        >
          <img
            src={leadFunnel}
            className="object-contain w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] block"
          />
          <img
            src={leadFunnelEdit}
            className="object-contain w-[100%] h-[100%] md:w-[90%] md:h-[90%] hidden"
          />
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  background-size: cover;

  @media screen and (max-width: 640px) {
    background: none !important;
  }
`;
