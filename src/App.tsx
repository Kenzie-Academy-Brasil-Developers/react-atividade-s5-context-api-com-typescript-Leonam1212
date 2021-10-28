import Catalogue from "../src/Components/Catalogue/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        {/* Renderizar a lista de produtos primeiro */}
        <h1>Catalogue</h1>
        <Catalogue type="catalogue" />
      </section>
      <section>
        {/* Carrinho */}
        <h1>Cart</h1>
        <Catalogue type="cart" />
      </section>
    </div>
  );
}

export default App;
