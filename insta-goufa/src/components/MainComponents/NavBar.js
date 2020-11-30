import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
    
    render(){
        return (
                <Navbar className="border-bottom bg-white text-dark">
                    <NavbarBrand href="/"> Insta Goufa </NavbarBrand>
                </Navbar>
        );
    }
}

export default NavBar;