import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu';

class Login extends Component {
    constructor() {
        super();
        this.state =
        {
            name: '',
            password: ''
        }
    }

    login() {
        console.warn(this.state);

        fetch('http://localhost:3000/login?q=' + this.state.name,)
            .then((data) => {
                data.json().then((resp) => {
                    console.warn("resp", resp)
                    if (resp.length > 0) {
                        localStorage.setItem('login', JSON.stringify(resp))
                        console.warn(this.props.history.push('list'));
                    } else {
                        alert("please check your Username and Password!!!");
                    }
                })
            })
    }
    render() {
        return (
            <div className="abc">
                <NavbarMenu />
                <h1>Login</h1>
                <div className="def">
                    <input type="text" name="user" onChange={(event) => this.setState({ name: event.target.value })} placeholder="Enter Username" /><br /><br />
                    <input type="password" name="password" onChange={((event) => this.setState({ passwword: event.target.value }))} placeholder="Enter password" /><br /><br />
                    <button onClick={() => this.login()}>Log In</button><br /><br />
                    <a href="/signup">create an account!</a>
                </div>
            </div>
        );
    }
}

export default Login;