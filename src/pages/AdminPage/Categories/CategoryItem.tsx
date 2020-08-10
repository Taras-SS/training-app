import React, { useState, useEffect } from "react";
import { Menu, Label, Icon } from "semantic-ui-react";
import { ICategory } from "../../../models/category";
import styles from "./Categories.module.css";
import Modal from "./DeleteModal";

interface Prop {
  item: ICategory;
  onCategoryRemoved: any;
}

export default function ({ item, onCategoryRemoved }: Prop) {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {}, []);

  const showModalWin = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Menu.Item className={styles.menuItem}>
        {item.title}
        <Label
          floating
          className={styles.deleteIconLabel}
          onClick={showModalWin}
        >
          <Icon name="cancel" className={styles.deleteIcon} />
        </Label>
      </Menu.Item>
      {showModal && (
        <Modal
          categoryTitle={item.title}
          visibility={showModal}
          hideModal={hideModal}
          categId={item._id}
          onCategoryRemoved={onCategoryRemoved}
        />
      )}
    </div>
  );
}
