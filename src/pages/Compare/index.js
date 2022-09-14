import React from "react";
import { useCompare } from "../../contexts/CompareContext";

function Compare() {
  const { compareItems } = useCompare();

  return (
    <div>
      {compareItems.map((item, key) => (
        <div key={key}>
          <h4>
            {item.DisplayName}-{item.ProductType}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Compare;
