import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <h1>Hello {this.props.currentUser.email}</h1>
          <Link to={'/shelters'}>All Shelters</Link>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Adopt Shop</h1>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;