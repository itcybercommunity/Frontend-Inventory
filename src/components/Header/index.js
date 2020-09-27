import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";

const Item = ({ title, onClick }) => {
  return (
    <div className="item-wrapper">
      <p className="menu-item" onClick={onClick}>
        {title}
      </p>
    </div>
  );
};

const Header = () => {
  const history = useHistory();
  return (
    <div>
      <div className="header">
        <div>
          <p className="title-app">Student Dev Kit - Inventory</p>
        </div>
        <div className="menu-wrapper">
          <Item
            title="Logout"
            onClick={() => history.push("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
