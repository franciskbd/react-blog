import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    console.log(this.props)
    return (

      <nav className="navbar navbar-expand-lg navbar-blue bg-blue">
        <a className="navbar-brand" href="#">{this.props.brand}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {this.props.links.map((item, index) => {
              return (
                <li className="nav-item" key={item + index}>
                  <a className="nav-link" href={item.local}>{item.name}</a>
                </li>
              )
            })}

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
