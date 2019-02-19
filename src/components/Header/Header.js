import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header row">
                <div>
                    <h3 className="Header__title">Brand Name</h3>
                </div>
                <div className="Header__links">
                    <NavLink className="Header__link" to="/" activeClassName="selected" >QUIZZES</NavLink>
                    <NavLink className="Header__link" to="/results" >RESULTS</NavLink>
                    <NavLink className="Header__link" to="/LogOut">LOG OUTS</NavLink>
                </div>
            </div>
        )
    }
}
export default Header;