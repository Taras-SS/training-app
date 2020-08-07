import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Goods } from "../../../models/goods";
import styles from "./Goods.module.css";

interface GoodsProp {
  item: Goods;
}

export default function (props: GoodsProp) {
  const {
    item: { imageUrl, title, description, price },
  } = props;

  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} className={styles.goodsImage} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{description}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <p className={styles.priceLine}>
          <Icon name="tags" /> {price} ₴
        </p>
      </Card.Content>
    </Card>
  );
}
