import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

import "./styles.scss";

export const Logo = () => (
  <div id="el-creatas-logo">
    <Link to="/">
      <img src={LogoImg} alt="el Creatas" />
    </Link>
  </div>
);
