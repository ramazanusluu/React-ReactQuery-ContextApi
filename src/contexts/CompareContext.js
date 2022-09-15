import { useState, createContext, useContext } from "react";

const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  // items => karşılaştırma kısmına atılmış ürün olarak düşünülebilir, varsayılan olarak eleman yok
  const [compareItems, setCompareItems] = useState([]);

  const addToCompare = (data) => {
    // if (!findCompareItem) {
    //   return setCompareItems((compareItems) => [item, ...compareItems]);
    // }

    // const itemIndex = compareItems.findIndex(
    //   (items) => items.ProductType !== data.ProductType
    // );
    // if (itemIndex === -1) {
    //   setCompareItems((compareItems) => [data, ...compareItems]);
    // } else {
    //   setCompareItems([]);
    // }

    // const filtered = compareItems.filter(
    //   (item) => item.ID !== findCompareItem.ID
    // );
    // setCompareItems(filtered);

    const itemIndex = compareItems.findIndex(
      (items) => items.ProductType !== data.ProductType
    );

    if (itemIndex === -1) {
      const findCompare = compareItems.find(
        (compareItem) => compareItem.ID === data.ID
      );

      if (!findCompare) {
        return setCompareItems((compareItems) => [data, ...compareItems]);
      }
      const filtered = compareItems.filter(
        (item) => item.ID !== findCompare.ID
      );
      setCompareItems(filtered);
    } else {
      setCompareItems([]);
    }
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
