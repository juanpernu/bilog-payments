import React, { createContext, useState } from 'react';
import { ProductCardsContent } from '../../content/home';

export const Context = createContext();
Context.displayName = 'UserContext';

export default ({ children }) => {
  const [state, setState] = useState(ProductCardsContent);
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
