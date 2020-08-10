import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Modal, Input, Label } from "semantic-ui-react";
import styles from "./Categories.module.css";
import { AddCategory as addCategory } from "../../../store/actions/categorries";
import { connect } from "react-redux";
import { ICategory } from "../../../models/category";

interface Prop {
  hideModal: any;
  visibility: boolean;
  onSubmit: any;
  insertNewCategory: any;
}

const AddCategory = ({
  hideModal,
  visibility,
  onSubmit,
  insertNewCategory,
}: Prop) => {
  const [visible, setVisible] = useState<boolean>(visibility);
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [warningStatus, setWarningStatus] = useState<boolean>(true);

  useEffect(() => {}, []);

  const handleCgange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (categoryTitle.trim().length < 5) {
      setWarningMessage("Мінімальна довжина 5 символів");
      setWarningStatus(false);
    } else {
      setWarningStatus(true);
      const response = await onSubmit({ title: categoryTitle });
      insertNewCategory(response);
      hideModal();
    }
  };

  return (
    <Modal
      closeIcon
      open={visible}
      onClose={hideModal}
      onOpen={() => setVisible(true)}
    >
      <Header icon="add" content="Добавлення категорії" />
      <Modal.Content>
        <Input
          className={styles.newCategoryBtn}
          placeholder="Назва категорії..."
          value={categoryTitle}
          onChange={handleCgange}
        />
        {!warningStatus && (
          <Label basic color="red" pointing="left">
            {warningMessage}
          </Label>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={hideModal}>
          <Icon name="remove" /> Скасувати
        </Button>
        <Button color="green" onClick={handleSubmit}>
          <Icon name="checkmark" /> Зберегти
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSubmit: (category: ICategory) => dispatch(addCategory(category)),
  };
};

export default connect(null, mapDispatchToProps)(AddCategory);
