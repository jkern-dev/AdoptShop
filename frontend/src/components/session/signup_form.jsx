import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userType: 'adoptee',
      password: '',
      city: '',
      state: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      userType: this.state.userType,
      password: this.state.password,
      city: this.state.city,
      state: this.state.state,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <select onChange={this.update('userType')} id="userType">
                <option value="adoptee">Pet Seeker</option>
                <option value="shelter">Shelter</option>
            </select>
            <br />
            <input type="text"
              value={this.state.city}
              onChange={this.update('city')}
              placeholder="City"
            />
            <br />
            <input type="text"
              value={this.state.state}
              onChange={this.update('state')}
              placeholder="State"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input type="submit" placeholder="Sign Up!" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
} 

export default withRouter(SignupForm);