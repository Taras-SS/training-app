import React, { useEffect, useState } from "react";
import { Grid, Menu, Segment, Sidebar, Image, Icon } from "semantic-ui-react";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import styles from "../../UserPage/Sidebar/Sidebar.module.css";

export default function () {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {}, []);

  return visible ? (
    <Grid columns={1} className={styles.sidebarWrapper}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment} className={styles.sidebarPushable}>
          <Sidebar
            className={styles.sidebarContent}
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={visible}
          >
            <Menu.Item>
              <Image
                src={defaultAvatar}
                size="small"
                circular
                className={styles.userAvatar}
              />
            </Menu.Item>
            <Menu.Item className={styles.menuItem} as="a">
              Головна
            </Menu.Item>
            <Menu.Item className={styles.menuItem} as="a">
              Категорії
            </Menu.Item>
            <Menu.Item className={styles.menuItem} as="a">
              Користувачі
            </Menu.Item>
            <Menu.Item className={styles.menuItem} as="a">
              Реклама
            </Menu.Item>
            <Menu.Item className={styles.menuItem} as="a">
              Вихід
            </Menu.Item>
            <Menu.Item
              className={styles.hideMenuBtn}
              as="a"
              onClick={() => setVisible(false)}
            >
              <Icon name="arrow left" />
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  ) : (
    <div className={styles.showMenuWrapper}>
      <Icon
        name="arrow right"
        className={styles.showMenuArrow}
        onClick={() => setVisible(true)}
      />
    </div>
  );
}
