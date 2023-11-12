import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stockList, onCardClick }) {
  const stockItems = stockList.map((stock) => {
    return <Stock stockInfo={stock} key={stock.id} callBack={onCardClick} />;
  });
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockItems}
    </div>
  );
}

export default PortfolioContainer;
