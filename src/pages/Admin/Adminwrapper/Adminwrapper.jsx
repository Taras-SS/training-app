import MainSidebar from "../Sidebar/Sidebar";
import React from "react";
import styles from "./Adminwrapper.module.css";
import Goodsforms from "../Goodsform/Goodsforms";

const Adminwrapper = () => {
  return (
    <div className={styles.wrapper}>
      <MainSidebar />
      <Goodsforms />
    </div>
  );
};

export default Adminwrapper;
