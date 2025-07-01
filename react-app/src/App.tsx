import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let products = [
    "iPhone",
    "iPad",
    "MacBook",
    "Apple Watch",
    "AirPods",
    "Apple TV",
    "HomePod",
  ];
  return (
    <div>
      <ListGroup items={products} heading="Products" />
    </div>
  );
}

export default App;
