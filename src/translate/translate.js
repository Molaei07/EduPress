import { setLanguage } from "react-multi-lang";

export let check;
export const changeToENG = () => {
  document.documentElement.classList.remove("dirRTL", "font-Farsi");
  setLanguage("en");
};

export const changeToFA = () => {
  document.documentElement.classList.add("dirRTL", "font-Farsi");
  setLanguage("fa");
};