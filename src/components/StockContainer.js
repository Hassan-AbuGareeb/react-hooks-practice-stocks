import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onCardClick, filter, sort }) {
  const filteredItems = stockList.filter((stock) => {
    if (filter === "all") return true;
    return filter.toLowerCase() === stock.type.toLowerCase();
  });

  const sortedValues = filteredItems.sort((a, b) => {
    if (sort === "price") {
      const aPrice = a.price,
        bPrice = b.price;
      return aPrice - bPrice;
    } else if (sort === "alphabetically") {
      const aName = a.name,
        bName = b.name;
      if (aName > bName) return 1;
      else if (bName > aName) return -1;
      else return 0;
    } else return 0;
  });

  const stockItems = sortedValues.map((stock) => {
    return <Stock stockInfo={stock} key={stock.id} callBack={onCardClick} />;
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stockItems}
    </div>
  );
}

export default StockContainer;
