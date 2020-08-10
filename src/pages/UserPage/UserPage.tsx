import React, { useEffect } from "react";
import MainSidebar from "./Sidebar/Sidebar";
import Goodsforms from "./Goodsform/Goodsforms";
import styles from "./UserPage.module.css";

export default function () {
  useEffect(() => {}, []);

  return (
    <div className={styles.wrapper}>
      <MainSidebar />
      <Goodsforms />
    </div>
  );
}
