import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  const productsInStore = ["Mac", "iPad", "iPhone", "Watch", "Accessories"];

  const handleMouseEnter = (item: string) => {
    if (item === "Store") {
      setActiveItem("Store");
    }
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <>
      <nav onMouseLeave={handleMouseLeave}>
        <ul className={styles.navbarContainer}>
          <li>
            <FaApple className={styles.appleLogo} />
          </li>
          {navItems.map((item) => (
            <li key={item} className={styles.navItem}>
              <a href="#" onMouseEnter={() => handleMouseEnter(item)}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <IoSearchOutline className={styles.searchIcon} />
          </li>
          <li>
            <BiShoppingBag className={styles.shoppingIcon} />
          </li>
        </ul>

        {activeItem === "Store" && (
          <div className={styles.cards}>
            {productsInStore.map((product) => (
              <li
                key={product}
                style={{
                  listStyle: "none",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                {product}
              </li>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
