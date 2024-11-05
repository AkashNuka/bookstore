import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Bookcart</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <button style={{ backgroundColor: 'blue', borderRadius: '12px', color: 'white' }}>fverdsv</button>
            </nav>
        </div>
    );
}

export default Navbar;