import React, { Component } from 'react';
import {
    Carousel
} from 'react-bootstrap';

import NavbarMenu from './NavbarMenu';

class Home extends Component {
    render() {
        return (
            <div >
                <NavbarMenu />
                <h1> -HOME-</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
                            alt="First slide"
                            height="200px"
                            width="100px"
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="https://amymhaddad.s3.amazonaws.com/oriental-tiles.png"
                            alt="Second slide"
                            height="200px"
                            width="100px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
                            alt="Third slide"
                            height="200px"
                            width="100px"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home