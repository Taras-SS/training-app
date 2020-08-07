import MainSidebar from "../Sidebar/Sidebar";
import React from "react";
import s from "./Adminwrapper.module.css";
import Goodsforms from "../Goodsform/Goodsforms";

const Adminwrapper = () => {
  return (
    <div className={s.wrapper}>
      <MainSidebar />
      <Goodsforms />
    </div>
  );
};

export default Adminwrapper;
