import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class NavBar extends Component {
  searchTerm=""
  handleInput = event => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">Here'sUrNews</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Contact Us</Link>
                </li>


                <li className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li>
                <Link className="dropdown-item"aria-current="page" to="/business"> business</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/entertainment"> entertainment</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/general"> General</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/health"> health</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/science"> science</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/sports"> sports</Link>
                </li>
               <li>
                <Link className="dropdown-item"aria-current="page" to="/technology"> technology</Link>
                </li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" onChange={this.handleInput} type="search" placeholder="Search" aria-label="Search"/>
                <button classNameName="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
  }
}

export default NavBar