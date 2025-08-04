import { useContext } from "react";

import { GlobalContext } from "../context/Globalcontext.jsx";

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext() must be in the GlobalContextProvider");
  }
  return context;
}
