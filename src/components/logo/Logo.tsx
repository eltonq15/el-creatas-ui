import { Link } from "react-router-dom";

import "./styles.scss";

export const Logo = () => (
  <div id="el-creatas-logo">
    <Link to="/">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="el Creatas" />
    </Link>
  </div>
);
