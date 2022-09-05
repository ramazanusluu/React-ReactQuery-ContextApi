import { useState, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //items => sepete atılmış ürün olarak düşünülebilir, varsayılan olarak sepette bir eleman yok
  const [items, setItems] = useState({
    card: [],
  });

  const addToBasket = (data) =>
    setItems({
      ...items,
      card: items.card.find((cardItem) => cardItem.ID === data.ID)
        ? items.card.map((cardItem) =>
            cardItem.ID === data.ID
              ? { ...cardItem, count: cardItem.count + 1 }
              : cardItem
          )
        : [...items.card, { ...data, count: 1 }],
    });

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
