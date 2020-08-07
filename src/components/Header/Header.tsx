import React, { useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function () {
  useEffect(() => {}, []);

  return (
    <Menu>
      <Menu.Item as={Link} to="/admin" name="Admin">
        Admin
      </Menu.Item>

      <Menu.Item as={Link} to="/signIn" name="SignIn">
        Sign in
      </Menu.Item>

      <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item>
    </Menu>
  );
}
