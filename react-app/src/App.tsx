import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import { useState } from "react";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  // let products = [
  //   "iPhone",
  //   "iPad",
  //   "MacBook",
  //   "Apple Watch",
  //   "AirPods",
  //   "Apple TV",
  //   "HomePod",
  // ];
  // const handleSelectItem = (item: string) => {
  //   console.log("Selected item:", item);
  // };
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
