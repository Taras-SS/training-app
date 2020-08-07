import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Notif.module.css";

export default function () {
  return (
    <div className={styles.notificationWrapper}>
      <div className={styles.success}>
        <Icon name="check" className={styles.icon} />
        <div>
          <h3>Вітаємо :)</h3>
          <p>Товар успішно додано</p>
        </div>
      </div>
    </div>
  );
}
