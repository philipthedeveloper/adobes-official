import React from "react";
import styled from "styled-components";

type RangerProps = {
  totalRange: number;
  currentRange: number;
};

const Ranger = ({ totalRange, currentRange }: RangerProps) => {
  return (
    <Container>
      {Array.from({ length: totalRange }).map((_, index) => (
        <React.Fragment key={index}>
          <Circle filled={index < currentRange} className="neue-regular">
            {index + 1}
          </Circle>
          {index < totalRange - 1 && <Stroke />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Ranger;

// Styled-components for styling
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
`;

const Circle = styled.div<{ filled: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ filled }) => (filled ? "#0d0d0d" : "var(--base-color)")};
  background-color: ${({ filled }) =>
    filled ? "var(--base-color)" : "#0d0d0d"};
  border: ${({ filled }) => (filled ? "none" : "2px solid var(--base-color)")};
  transition: color, background-color, 0.4s ease;
`;

const Stroke = styled.div`
  height: 3px;
  //   width: 30px;
  flex: 1;
  background-color: var(--base-color);
  border-radius: 3px;
`;
