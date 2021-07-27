import React, { createContext, useState } from "react";
import { ProductCardsContent } from "../../content/home";

export const Context = createContext();
Context.displayName = "UserContext";

function ContextFn({ children }) {
  const [state, setState] = useState(ProductCardsContent);
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default ContextFn;
