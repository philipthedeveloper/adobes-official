import { useEffect, useState } from "react";
import "./App.css";
import Router from "./router/Router";
import { checkInViewPort } from "./utils";
// @ts-ignore
import FacebookPixel from "./tracking/Facebook";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeToggle from "./components/ui/ThemeToggle";

const handleWindowScroll = () => {
  const allCards = document.querySelectorAll(".fade-up-card");
  allCards.forEach((el: any) => {
    let inViewPort = checkInViewPort(el);
    inViewPort ? el.classList.add("opacityToggler") : void 0;
  });
};

function App() {
  const theme = useSelector((state: RootState) => state.Theme.theme);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <FacebookPixel />
      <ThemeToggle />
      <ToastContainer autoClose={2000} limit={1} theme={theme} />
      <Router />
    </>
  );
}

export default App;
