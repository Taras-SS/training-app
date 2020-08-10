import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { Goods } from "../../../models/goods";
import { getGoods } from "../../../store/actions/getGoods";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Goods.module.css";

const mapStateToProps = (state: RootState) => ({
  goodsList: state.goods.goods,
  goodsLoading: state.goods.loading,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getGoods: () => dispatch(getGoods()),
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const GoodsContainer = ({
  getGoods,
  goodsList,
  goodsLoading,
}: PropsFromRedux) => {
  useEffect(() => {
    getGoods();
  }, []);

  return (
    <div className={styles.container}>
      {!goodsLoading &&
        goodsList &&
        goodsList.map((item, index) => {
          return <ItemCard item={item} key={index} />;
        })}
    </div>
  );
};

export default connector(GoodsContainer);
