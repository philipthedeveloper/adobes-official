import { useEffect, useState } from "react";
import "./App.css";
import Router from "./router/Router";
import { checkInViewPort } from "./utils";

const handleWindowScroll = () => {
  const allCards = document.querySelectorAll(".fade-up-card");
  allCards.forEach((el: any) => {
    let inViewPort = checkInViewPort(el);
    inViewPort ? el.classList.add("opacityToggler") : void 0;
  });
};

function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
