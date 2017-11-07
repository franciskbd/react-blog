import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-background"></div>
        <div className="header">

          <p>My First Blog</p>
          <Adinkra className="symbol" name={'akoben'}/>
          <h4>Akoben</h4>
        </div>
      </div>

    )
  }
}
export default Header
