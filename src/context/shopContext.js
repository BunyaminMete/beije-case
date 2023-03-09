import React, { useState } from "react";

export const MyContext = React.createContext();

export default function MyProvider(props) {
  const [products, setProducts] = useState({});
  const [priceCheck, setPriceCheck] = useState(0);

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        priceCheck,
        setPriceCheck,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
