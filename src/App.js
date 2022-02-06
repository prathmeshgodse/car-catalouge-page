import "./App.css";
import Catalouge from "./components/catalouge/catalouge.component";
import Header from "./components/header/header.component";
import ItemModal from "./components/item-modal/item-modal.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalouge />
      <ItemModal />
    </div>
  );
}

export default App;
