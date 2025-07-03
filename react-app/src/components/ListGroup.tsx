import { use, useState } from "react";

interface Products {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Products) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let listOfProducts = items.map((items, index) => (
    <li
      key={index}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem(items);
      }}
    >
      {items} {index}
    </li>
  ));

  return (
    <>
      <p className="text-muted text-center">
        {items.length === 0 ? "No products available" : ""}
      </p>
      <h1 className="text-primary text-center">{heading}</h1>
      <ul className="list-group">{listOfProducts}</ul>
    </>
  );
}
export default ListGroup;
