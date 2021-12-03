import React, { Component } from "react";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  updateFun = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitFun = () => {
    if (this.state.name.length >= 3 && this.state.name.length <= 15) {
      const nameRegex = /^[a-zA-Z ]{0,30}$/;
      if (nameRegex.test(this.state.name)) {
        console.log(this.state.name);
        document.getElementById("nameStatus").innerHTML = "";
      } else {
        document.getElementById("nameStatus").innerHTML = "Invalid Name";
      }
    } else {
      document.getElementById("nameStatus").innerHTML =
        this.state.name + " Name length doesn't match";
    }

    if (this.state.password.length >= 5 && this.state.password.length <= 14) {
      console.log(this.state.password);
      document.getElementById("pwdStatus").innerHTML = "";
    } else {
      document.getElementById("pwdStatus").innerHTML =
        "password length doesn't match";
    }

    const EmailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (EmailRegex.test(this.state.email)) {
      console.log(this.state.email);
      document.getElementById("emailStatus").innerHTML = "";
    } else {
      document.getElementById("emailStatus").innerHTML =
        this.state.email + " Invalid Email";
    }
  };

  render() {
    return (
      <div className="loginForm">
        <form>
          <div>
            <input
              value={this.state.name}
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => this.updateFun(e)}
            />
            <div id="nameStatus"></div>
          </div>
          <div>
            <input
              value={this.state.email}
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => this.updateFun(e)}
            />
            <div id="emailStatus"></div>
          </div>
          <div>
            <input
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.updateFun(e)}
            />
            <div id="pwdStatus"></div>
          </div>
        </form>
        <div>
          <button onClick={this.submitFun}>Submit</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
