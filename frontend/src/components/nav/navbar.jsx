import React from 'react';
import { Link } from 'react-router-dom';
import { receiveCurrentUser } from '../../actions/session_actions';
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
    if (this.props.loggedIn && this.props.currentUser.userType === "adoptee") {
      return (
        <div>
          <h1>Hello {this.props.currentUser.email}</h1>
          <Link to={'/shelters'}>Shelters</Link>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else if (this.props.loggedIn && this.props.currentUser.userType === "shelter") {
      return (
        <div>
          <h1>Hello {this.props.currentUser.email}</h1>
          <Link to={'/pets'}>Pets</Link>
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
        <Link to='/'><h1>Adopt Shop</h1></Link>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;