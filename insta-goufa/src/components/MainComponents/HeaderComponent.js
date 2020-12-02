import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Insta-Goufa</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">Insta-Goufa</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;