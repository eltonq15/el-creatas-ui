import { Link } from "react-router-dom";

import "./styles.scss";

export const Logo = () => (
  <div id="el-creatas-logo">
    <Link to="/">
      <img src={`../../assets/logo.png`} alt="el Creatas" />
    </Link>
  </div>
);
