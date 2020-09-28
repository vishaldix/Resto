import React, { Component } from 'react';

import {
    Table,Form,Container
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faStar, faLandmark, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
    Link
} from 'react-router-dom';
import NavbarMenu from './NavbarMenu';

class ResturantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null
        }
    }
    search(key) {
        console.warn(key);
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/resturant?q=' + key,)
            .then((data) => {
                data.json().then((resp) => {
                    console.warn("resp", resp)
                    if(resp.length>0)
                    {
                        this.setState({ searchData: resp,noData:false })
                    } else
                    {
                        this.setState({ noData:true,searchData: null })
                    }
                })
            })
    }
    render() {
        return (
            <Container>
                <NavbarMenu />
                <h1>Resturant Search</h1>
                <div>
                    <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Resturant" />
                </div><br />
                <div>
                    {
                        this.state.searchData ?
                            <div >
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
                                            this.state.searchData.map((item) =>
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
                            <div>No Data found........... </div>
                    }


                </div>
            </Container >
        );
    }
}

export default ResturantSearch;