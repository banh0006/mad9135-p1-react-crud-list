import React from 'react';
import { NavLink } from 'react-router-dom'

class AppHeader extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/" activeClassName="selected" id="home-link">Animals Explorer</NavLink>
                <NavLink to="/add" activeClassName="selected" id="add-link">Add New Animal</NavLink>
            </nav>
        );
    }
}

export default AppHeader