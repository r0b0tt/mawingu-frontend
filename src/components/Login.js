import { faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import MawinguLogo from '../assets/img/mawingu.png';
import { loginUser } from '../redux/actions/index';

const Login = (props) => {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        /**
        * Handles input change by setting the state with the necessary values.
        * @param e:Event emitted by the input change listener.
        */
        let name = e.target.name;
        let value = e.target.value;

        name === "phone" ? setPhone(value) : setPassword(value);
    }

    const handleFormSubmit = (e) => {
        /**
         * Handles login form submit by sending a POST request to the login endpoint.
         * @param e:Event emitted by the submit listener.
         */
        e.preventDefault();

        let data = {
            phone: phone,
            password: password
        };
        props.loginUser(data);

    }


    return (
        <Fragment>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <div className="mt-5 p-3 login-container shadow">
                    <div className="login-header">
                        <img src={MawinguLogo} alt="Mawingu Logo" />
                        <h1 className="my-3">Admin Login</h1>
                    </div>
                    <div className="login-body">
                        <form method="post" onSubmit={handleFormSubmit}>
                            {
                                props.authErrMessage &&
                                <div className="alert alert-danger" role="alert">
                                    Unable to Log you in. Please try again!
                            </div>
                            }
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                                </div>
                                <input type="tel"
                                    className="form-control" placeholder="Phone"
                                    name="phone" onChange={handleInputChange} value={phone}
                                    required />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input type="password"
                                    className="form-control" placeholder="Password"
                                    name="password" onChange={handleInputChange} value={password}
                                    required />

                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    authErrMessage: state.authErrMessage,
})

export default connect(mapStateToProps, { loginUser })(Login);

