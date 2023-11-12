import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStock, setPortfolioStock] = useState([]);
  const [sort, setSort] = useState("none");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data));
  }, []);

  function handleCopyStock(stockId) {
    const copiedStock = stocks.filter((stock) => stock.id === stockId);

    setPortfolioStock((prev) => [...prev, ...copiedStock]);
  }

  function handleDeleteStock(stockId) {
    const updatedPortfolioStocks = portfolioStock.filter((stock) => {
      return stock.id !== stockId;
    });
    setPortfolioStock([...updatedPortfolioStocks]);
  }

  return (
    <div>
      <SearchBar
        sortValue={sort}
        filterValue={filter}
        onFilterChange={setFilter}
        onSortChange={setSort}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stockList={stocks}
            onCardClick={handleCopyStock}
            filter={filter}
            sort={sort}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stockList={portfolioStock}
            onCardClick={handleDeleteStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
