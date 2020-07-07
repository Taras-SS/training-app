import React from "react";
import { Header, Image, Menu, Ref, Segment, Sidebar } from "semantic-ui-react";
import s from "./Sidebar.module.css";

const MainSidebar = () => {
  return (
    <div className={s.sidebarlook}>
      <a href="#" className={s.sidebaritems}>
        Головна
      </a>
      <a href="#" className={s.sidebaritems}>
        Список товарів
      </a>
      <a href="#" className={s.sidebaritems}>
        Редагувати
      </a>
      <a href="#" className={s.sidebaritems}>
        Вихід
      </a>
    </div>
  );
};

export default MainSidebar;
