import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.yearSelected = this.yearSelected.bind(this);
  }

  yearSelected(year, event) {
    this.props.yearSelection(year);
    event.preventDefault();
    // console.log("component header", year);
  }

  render() {
    const releaseYears = [2018, 2017, 2016];
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <label className="navbar-brand">Top Movies</label>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {releaseYears.map(ryear => (
                <li className="nav-item active" key={ryear}>
                  <Link
                    to={`/movies/${ryear}`}
                    className="btn btn-link"
                    onClick={this.yearSelected.bind(this, ryear)}
                  >
                    {ryear}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
