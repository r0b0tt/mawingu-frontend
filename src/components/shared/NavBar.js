import React from 'react';
import MawinguLogo from '../../assets/img/mawingu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
            <a className="navbar-brand" href="/">
                <img src={MawinguLogo} alt="Mawingu Logo" className="img-fluid" />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Tasks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Personnel</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Reports</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="/">Commissions</a>
                                <a className="dropdown-item" href="/">Customers</a>
                                <a className="dropdown-item" href="/">Merchants</a>
                                <a className="dropdown-item" href="/">Payments</a>
                            </div>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="userAccount" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={faUser} /> &nbsp;
                                Alvaro
                        </a>
                            <div className="dropdown-menu" aria-labelledby="userAccount">
                                <a className="dropdown-item" href="/">Change Password</a>
                                <a className="dropdown-item" href="/">Logout</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;