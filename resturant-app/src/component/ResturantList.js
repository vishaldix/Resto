import React, { Component } from 'react';
import {
    Table
} from 'react-bootstrap'
import NavbarMenu from './NavbarMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faStar, faLandmark, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
    Link
} from 'react-router-dom'

class ResturantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }

    getData()
    {
        fetch('http://localhost:3000/resturant')
            .then(response => response.json())
            .then((result) => {
                this.setState
                    (
                        { list: result }
                    )
            });
    }
    delete(id) 
    {
        fetch('http://localhost:3000/resturant/'+id,
        {
            method: "DELETE",
            // headers: {
            //     'Content-Type': "application/json"
            // }
        }).then((result) => {
                result.json().then((resp) => {
                    alert("I Love YOU, Please Dont Delete Mee ;('")
                    this.getData()
                })
            })
    }
    render() {

        return (
            <div>
                <NavbarMenu />
                <h1>Resturant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th> <FontAwesomeIcon icon={faIdCard} color="yellow" /></th>
                                        <th>Name</th>
                                        <th>rating <FontAwesomeIcon icon={faStar} color="yellow" /></th>
                                        <th>email <FontAwesomeIcon icon={faEnvelope} color="orange" /></th>
                                        <th>address <FontAwesomeIcon icon={faLandmark} color="yellow" /></th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map
                                            (
                                                (item, i) =>
                                                    // <div className='list-wrapper'>
                                                    //     <span> {item.id}</span>
                                                    //     <span> {item.name}</span>
                                                    //     <span> {item.ratings}</span>
                                                    //     <span> {item.email}</span>
                                                    //     <span> {item.address}</span>
                                                    // </div>

                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.ratings}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.address}</td>
                                                        <td><Link to={'/update/' + item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                                            <br />
                                                            <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                                    </tr>
                                            )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        :
                        <p>PLease Wait.........................</p>
                }
            </div>
        );
    }
}

export default ResturantList;