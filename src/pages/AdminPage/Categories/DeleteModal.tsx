import React, { useState, useEffect } from "react";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
import styles from "./Categories.module.css";
import { connect } from "react-redux";
import { removeCategory } from "../../../store/actions/categorries";

interface Prop {
  categoryTitle: string;
  visibility: boolean;
  hideModal: any;
  onDelete: any;
  categId: string | undefined;
  onCategoryRemoved: any;
}

const RemoveCategoryModal = ({
  categoryTitle,
  visibility,
  hideModal,
  onDelete,
  categId,
  onCategoryRemoved,
}: Prop) => {
  const [visible, setVisible] = useState<boolean>(visibility);

  useEffect(() => {}, []);

  const handleDelete = async () => {
    if (categId !== undefined) {
      await onDelete(categId);
      onCategoryRemoved(categId);
    }
    hideModal();
  };

  return (
    <Modal
      closeIcon
      open={visible}
      onClose={hideModal}
      onOpen={() => setVisible(true)}
    >
      <Header
        icon="archive"
        content={`Видалити категорію "${categoryTitle}"?`}
      />
      <Modal.Content>
        <p className={styles.modalText}>
          Категорія буде остаточно видалена без можливості повернення
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={hideModal}>
          <Icon name="remove" /> Ні
        </Button>
        <Button color="green" onClick={() => handleDelete()}>
          <Icon name="checkmark" /> Так
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onDelete: (categoryId: string) => dispatch(removeCategory(categoryId)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveCategoryModal);
