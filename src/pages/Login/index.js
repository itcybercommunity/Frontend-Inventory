import React from "react";
import { useHistory } from "react-router-dom";
import "./login.scss";

const Item = ({ title, onClick }) => {
  return (
    <div className="item-wrapper">
      <p className="menu-item" onClick={onClick}>
        {title}
      </p>
    </div>
  );
};
const Login = () => {
  const history = useHistory();
  return (
    <div>
      <div className="login">
        <p>Login Page</p>
        <div className="menu-wrapper">
          <Item title="Menu Utama" onClick={() => history.push("/")} />
        </div>
      </div>
    </div>
  );
};

export default Login;
