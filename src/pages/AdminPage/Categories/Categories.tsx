import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { ICategory } from "../../../models/category";
import { getCategories } from "../../../store/actions/categorries";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store";
import CategoryItem from "./CategoryItem";
import { Menu, Button } from "semantic-ui-react";
import AddModal from "./AddModal";

const mapStateToProps = (state: RootState) => ({
  categoriesLoading: state.categories.loading,
  categoriesList: state.categories.categories,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getCategories: () => dispatch(getCategories()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const CategoriesContainer = ({
  getCategories,
  categoriesList,
  categoriesLoading,
}: PropsFromRedux) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[] | null>(
    categoriesList
  );

  useEffect(() => {
    getCategories();
  }, []);

  const addNewCategory = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  const insertNewCategory = (category: ICategory) => {
    categories !== null
      ? setCategories([...categories, category])
      : setCategories([category]);
  };

  const onCategoryRemoved = (categoryId: string) => {
    categories !== null &&
      setCategories((prevCategories) => {
        return categories.filter((item) => item._id !== categoryId);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Menu className={styles.caltegoriesListWrapper}>
        {!categoriesLoading &&
          categories &&
          categories.map((item: ICategory, index: number) => {
            return (
              <CategoryItem
                key={index}
                item={item}
                onCategoryRemoved={onCategoryRemoved}
              />
            );
          })}
        <Button className={styles.addCategoryBtn} onClick={addNewCategory}>
          Добавити...
        </Button>
      </Menu>
      {modalVisibility && (
        <AddModal
          visibility={modalVisibility}
          hideModal={hideModal}
          insertNewCategory={insertNewCategory}
        />
      )}
    </div>
  );
};

export default connector(CategoriesContainer);
