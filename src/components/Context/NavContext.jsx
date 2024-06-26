import { createContext, useState } from "react";
import About from "../About";

export const NavContext = createContext();
export const NavContextProvider = ({ childern }) => {
  const [selected, setSelected] = useState("about");
  const [component, setComponent] = useState(<About />);
  const [title, setTitle] = useState("About Me");

  return (
    <NavContext.Provider
      value={{
        selected,
        component,
        title,
        setComponent,
        setSelected,
        setTitle,
      }}
    >
      {childern}
    </NavContext.Provider>
  );
};
