import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu';

class ResturantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            ratings: null,
            address: null,
            email: null,
            id: null,
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/resturant/'+this.props.match.params.id)
        .then(response => response.json())
        .then((result) => {

            console.warn(result)
            this.setState
                (
                    {
                        name:result.name,
                        ratings:result.ratings,
                        address:result.address,
                        email:result.email,
                        id:result.id
                    }
                )
        });
    }
    update()
    {
        fetch('http://localhost:3000/resturant/'+this.state.id,
            {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Resturant updated ;-)")
                })
            })
    }
    render() {
        console.warn(this.state);
        return (
            <div>
                <NavbarMenu />
                <h1>Resturant Update</h1>
                <div className="def">
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Resturant Name" value={this.state.name}/> <br /><br />

                    <input onChange={(event) => { this.setState({ ratings: event.target.value }) }}
                        placeholder="Resturant Ratings" value={this.state.ratings}/> <br /><br />

                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Resturant Address" value={this.state.address}/> <br /><br />

                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Resturant Email" value={this.state.email}/> <br /><br />

                    <button variant="success" onClick={() => { this.update() }}>update</button>
                </div>
            </div>
        );
    }
}

export default ResturantUpdate;