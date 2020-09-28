import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu';

class ResturantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            ratings: null,
            address: null,
            email: null
        }
    }
    create() {
        fetch('http://localhost:3000/resturant',
            {
                method: "Post",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Resturant Created ;-)")
                })
            })
    }
    render() {
        return (
            <div className="abc">
                <NavbarMenu />
                <h1>Resturant Create</h1><br /><br /><br />
                <div className="def">
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Resturant Name" /> <br /><br />

                    <input onChange={(event) => { this.setState({ ratings: event.target.value }) }}
                        placeholder="Resturant Ratings" /> <br /><br />

                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Resturant Address" /> <br /><br />

                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Resturant Email" /> <br /><br />

                    <button variant="success" onClick={() => { this.create() }}>Add Resturant</button>
                </div>
            </div>
        );
    }
}

export default ResturantCreate;