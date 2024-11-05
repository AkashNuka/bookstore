import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div className="navbar" style={{ width: '100%', border: '2px solid #007bff' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '100%' }}>
                <div className="container-fluid">
                    <div className="row w-100">
                        <div className="col-md-8 d-flex justify-content-between">
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
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            <form className="form-inline my-2 my-lg-0 d-flex">
                                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;