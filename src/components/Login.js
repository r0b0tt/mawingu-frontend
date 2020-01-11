import React, { Fragment, useState } from 'react';
import MawinguLogo from '../assets/img/mawingu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone } from '@fortawesome/free-solid-svg-icons'

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
        console.log(data);
        // TODO Submit data to api endpoint
        props.history.push("/")

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
                                    className={password === "" ? "form-control is-invalid" : "form-control"} placeholder="Password"
                                    name="password" onChange={handleInputChange} value={password}
                                    required />
                                {
                                    password === "" &&
                                    <div className="invalid-feedback">
                                        Password is required
                                </div>
                                }
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;

