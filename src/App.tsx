import { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import PriceFilter from "./components/PriceFilter";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  return (
    <div className="p-4 max-w-4xl mx-auto pb-20">
      <h1 className="text-2xl font-bold text-center mb-4">eSapiens Store</h1>
      <div className="flex gap-2 mb-4">
        <SearchBar onSearch={setSearchQuery} />
        <PriceFilter onFilter={setPriceFilter} />
      </div>
      <ProductList searchQuery={searchQuery} priceFilter={priceFilter} />
    </div>
  );
};

export default App;
