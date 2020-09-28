import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            password: ''
        }
    }

    sign() {
        fetch('http://localhost:3000/login',
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(this.state)
            }
        ).then(response =>
            response.json()).then(data => {
                alert("Account Created ;-)")
            }
            ) 
            .catch((error) => {
                console.error('Error:', error);
              });  

    }
    render() {
        return (
            // <div>
            //     <input type="text" name="user" placeholder="enter Username"/>
            //     <input type="password" name="password" placeholder="enter Password"/>
            //     <button>Signup</button>
            // </div>
            <div className="abc">
                <h1>Create your Account</h1><br /><br /><br />
                <div className="def">
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="enter userName" /> <br /><br />

                    <input onChange={(event) => { this.setState({ password: event.target.value }) }}
                        placeholder="Enter Paassword" /> <br /><br />

                    <button variant="success" onClick={() => { this.sign() }}>SignUp</button>
                </div>
            </div>
        );
    }
}

export default Signup;