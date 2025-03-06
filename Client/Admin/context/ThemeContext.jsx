import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeApp = createContext({});

// eslint-disable-next-line react/prop-types
const ThemeConnext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  return (
    <ThemeApp.Provider
      value={{
        categories,
        setCategories,
        brands,
        setBrands,
        setColors,
        colors,
        sizes,
        setSizes
      }}
    >
      {children}
    </ThemeApp.Provider>
  );
};

export default ThemeConnext;
