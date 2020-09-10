import React from 'react';
import Css from './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1>ONLINE CLASS WEBSITE</h1>
            <nav>
                <a href="Business">Business</a>
                <a href="Data">Data Science</a>
                <a href="Health">Health</a>
                <a href="Personal">Personal Development</a>
            </nav>
        </div>
    );
};

export default Header;