import React from "react";
import Menu from "./Menu/Menu";
import styles from "./Admin.module.css";
import Categories from "./Categories/Categories";

export default function () {
  return (
    <div className={styles.wrapper}>
      <Menu />
      <Categories />
    </div>
  );
}
