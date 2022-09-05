import { useState, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //items => sepete atılmış ürün olarak düşünülebilir, varsayılan olarak sepette bir eleman yok
  const [items, setItems] = useState([]);

  const addToBasket = (data) => {
    setItems((prev) => [...prev, data]);
  };

  const values = {
    items,
    setItems,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
