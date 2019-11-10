import React from 'react';
import { NavLink as NavRouteLink} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class AppHeader extends React.Component {
    render() {
        return (
            <Navbar color="dark" dark >
                <NavRouteLink to="/" activeClassName="selected" id="home-link">
                    <NavbarBrand style={{color:"#fff"}}>Animals Explorer</NavbarBrand>
                </NavRouteLink>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavRouteLink to="/add" activeClassName="selected" id="add-link">
                            <NavLink>Add New Animal</NavLink>
                        </NavRouteLink>
                    </NavItem>
                </Nav>
            </Navbar>

            // <nav>
            //     <NavRouteLink to="/" activeClassName="selected" id="home-link">Animals Explorer</NavRouteLink>
            //     <NavRouteLink to="/add" activeClassName="selected" id="add-link">Add New Animal</NavRouteLink>
            // </nav>
        );
    }
}

export default AppHeader