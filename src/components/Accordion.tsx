import { useEffect, useRef } from "react";
import styled from "styled-components";
import parse from "html-react-parser";

interface DataType {
  question: string;
  answer: string;
}

interface AccordionProps {
  data: DataType;
}

export const Accordion = ({ data: { question, answer } }: AccordionProps) => {
  const butRef = useRef<any>(null);

  useEffect(() => {
    butRef.current.addEventListener("click", function (e: any) {
      console.log("clicked");
      e.target.classList.toggle("active");
      const text = e.target.nextElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = "";
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  }, []);

  return (
    <AccordionContainer>
      <AccordionBtn ref={butRef}>
        <Question>{question}</Question>
        <i
          className="fi fi-rr-caret-down flex text-white"
          style={{ pointerEvents: "none" }}
        ></i>
      </AccordionBtn>
      <Panel>
        <p className="text-white text-xs leading-relaxed">{parse(answer)}</p>
      </Panel>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 5px;
`;

const AccordionBtn = styled.button`
  width: 100%;
  padding: 1rem 1.2rem;
  border: none;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  transition: 0.4s;
  text-align: left;
  background-color: var(--base-color-darker);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  i {
    width: 25px;
    height: 25px;
    font-size: 1.4rem;
    transition: 0.5s ease;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  &.active {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &.active i {
    transform: rotateZ(180deg);
  }
`;

const Question = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  pointer-events: none;
`;

const Panel = styled.div`
  font-family: sans-serif;
  font-size: 0.75rem;
  line-height: 1.5rem;
  background-color: var(--base-color-trans);
  overflow: hidden;
  transition: 0.5s;
  max-height: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    padding: 1.5rem;
  }
`;
export default Accordion;
