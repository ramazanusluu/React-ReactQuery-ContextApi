import { useState, createContext, useContext } from "react";

const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  // items => karşılaştırma kısmına atılmış ürün olarak düşünülebilir, varsayılan olarak eleman yok
  const [compareItems, setCompareItems] = useState([]);

  const addToCompare = (item) => {
    // if (!findCompareItem) {
    //   return setCompareItems((compareItems) => [item, ...compareItems]);
    // }

    const itemIndex = compareItems.findIndex(
      (items) => items.ProductType !== item.ProductType
    );
    if (itemIndex == -1) {
      setCompareItems((compareItems) => [item, ...compareItems]);
    } else {
      setCompareItems([]);
    }

    // const filtered = compareItems.filter(
    //   (item) => item.ID !== findCompareItem.ID
    // );
    // setCompareItems(filtered);
  };

  const values = {
    compareItems,
    setCompareItems,
    addToCompare,
  };
  return (
    <CompareContext.Provider value={values}>{children}</CompareContext.Provider>
  );
};

const useCompare = () => useContext(CompareContext);

export { CompareProvider, useCompare };
