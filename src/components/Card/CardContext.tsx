import { createContext, useContext } from "react";

interface CardContextInterface {
  orientation: "vertical" | "horizontal";
}

export const CardContext = createContext<CardContextInterface | undefined>(
  undefined
);

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("The child components must be used inside Card components");
  }

  return context;
};
