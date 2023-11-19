import "./App.css";
import Header from "./Components/Header/Header";
import ProductCardsContainer from "./Components/ProductsPage/ProductCardsContainer";
import SearchItems from "./Components/ProductsPage/SearchItems";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchItems />
      <ProductCardsContainer />
    </div>
  );
}

export default App;
