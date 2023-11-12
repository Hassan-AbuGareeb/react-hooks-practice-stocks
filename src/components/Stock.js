import React from "react";

function Stock({ stockInfo, callBack }) {
  function handleCardClick() {
    callBack(id);
  }
  const { ticker, name, price, id } = stockInfo;
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleCardClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
