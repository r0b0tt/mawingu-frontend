import { faCalendar, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import NavBar from './shared/NavBar';
import { Pie } from 'react-chartjs-2';

class Dashboard extends Component {
    render() {
        const data = {
            labels: [
                'Pending',
                'Completed'
            ],
            datasets: [{
                data: [30, 10],
                backgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                ]
            }]
        };
        return (
            <Fragment>
                <NavBar />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tasks</h5>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-condensed">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Phone</th>
                                                    <th>Registration</th>
                                                    <th>Status</th>
                                                    <th>Created</th>
                                                    <th colSpan="3">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nancy</td>
                                                    <td>Mwangi</td>
                                                    <td>+254727337353</td>
                                                    <td>Self</td>
                                                    <td><span className="badge badge-warning">In Progress</span></td>
                                                    <td>20th Jun 2019 09:22 am</td>
                                                    <td>
                                                        <button type="button" className="btn btn-success btn-sm" data-toggle="modal"
                                                            data-target="#updateModal">
                                                            Update
                                            </button>
                                                        <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog"
                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Update Nancy
                                                                            Mwangi
                                                            </h5>
                                                                        <button type="button" className="close" data-dismiss="modal"
                                                                            aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <form action="#" method="post">
                                                                        <input type="hidden" name="task_id" value="21962" />
                                                                        <input type="hidden" name="task_status_id" value="3" />
                                                                        <div className="modal-body">
                                                                            <p><strong>Customer Phone:</strong> +254382742637</p>
                                                                            <label>Gender</label>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="radio"
                                                                                    name="gender" id="gender1" value="Male" />
                                                                                <label className="form-check-label" htmlFor="gender1">
                                                                                    Male
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="radio"
                                                                                    name="gender" id="gender2" value="option2" />
                                                                                <label className="form-check-label" htmlFor="gender2">
                                                                                    Female
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="location">Location</label>
                                                                                <input type="text" className="form-control"
                                                                                    name="location" id="location"
                                                                                    placeholder="Location" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="age">Age</label>
                                                                                <input type="number" className="form-control" name="age"
                                                                                    id="age" placeholder="Age" />
                                                                            </div>
                                                                            <label>Customer Education</label>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    value="1" name="access_code" id="access_code1" />
                                                                                <label className="form-check-label" htmlFor="access_code1">
                                                                                    Access Code
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    value="1" name="splash_page" id="splash_page1" />
                                                                                <label className="form-check-label" htmlFor="splash_page1">
                                                                                    Splash Page
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    value="1" name="autoplay" id="autoplay1" />
                                                                                <label className="form-check-label" htmlFor="autoplay1">
                                                                                    Turn off autoplay
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    value="1" name="mpesa" id="mpesa1" />
                                                                                <label className="form-check-label" htmlFor="mpesa1">
                                                                                    M-Pesa training
                                                                    </label>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="comments">Comments</label>
                                                                                <textarea className="form-control" name="comments"
                                                                                    id="comments" rows="3"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary"
                                                                                data-dismiss="modal">Close</button>
                                                                            <button type="submit" className="btn btn-primary">Update
                                                                    Customer</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal"
                                                            data-target="#deferModal">
                                                            Defer
                                            </button>
                                                        <div className="modal fade" id="deferModal" tabIndex="-1" role="dialog"
                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Defer Nancy
                                                                            Mwangi
                                                            </h5>
                                                                        <button type="button" className="close" data-dismiss="modal"
                                                                            aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <form action="#" method="post">
                                                                        <input type="hidden" name="task_id" value="21962" />
                                                                        <input type="hidden" name="task_status_id" value="4" />
                                                                        <div className="modal-body">
                                                                            <p><strong>Customer Phone:</strong> +254382742637</p>
                                                                            <div className="form-group">
                                                                                <label htmlFor="comments">Comments</label>
                                                                                <textarea className="form-control" name="comments"
                                                                                    id="comments" rows="3"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary"
                                                                                data-dismiss="modal">Close</button>
                                                                            <button type="submit" className="btn btn-danger">Defer
                                                                    Customer</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>2</td>
                                                    <td>moses</td>
                                                    <td>kinyua</td>
                                                    <td>+254796893219</td>
                                                    <td>Self</td>
                                                    <td><span className="label label-primary">Assigned</span></td>
                                                    <td>20th Jun 2019 09:22 am</td>
                                                    <td>
                                                        <form
                                                            onSubmit={e => window.confirm("Are you sure you want to select moses kinyua?")}
                                                            method="post" acceptCharset="utf-8">
                                                            <input type="hidden" name="task_id" value="21963" /><input type="hidden"
                                                                name="task_status_id" value="2" />
                                                            <button type="submit" className="btn btn-warning btn-sm">Select</button>
                                                        </form>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>2</td>
                                                    <td>Caroline</td>
                                                    <td>Mukami</td>
                                                    <td>+254797677910</td>
                                                    <td>Merchant</td>
                                                    <td><span className="badge badge-danger">Deferred</span></td>
                                                    <td>12th Mar 2019 12:27 pm</td>
                                                    <td>
                                                        <form action="#"
                                                            onSubmit="return confirm('Are you sure you want to put this customer back to In Progress?')"
                                                            method="post" acceptCharset="utf-8">
                                                            <input type="hidden" name="task_id" value="4600" /><input type="hidden"
                                                                name="task_status_id" value="2" />
                                                            <button type="submit" className="btn btn-warning btn-sm">Select</button>
                                                        </form>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Boniface</td>
                                                    <td>Ntwiga</td>
                                                    <td>+254720721458</td>
                                                    <td>Self</td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td>12th Mar 2019 12:19 pm</td>
                                                    <td>
                                                        <a href="javascript:void(0)" className="btn btn-sm btn-primary"
                                                            data-toggle="modal" data-target="#view_customer4596">View</a>
                                                        <div id="view_customer4596" className="modal fade" tabIndex="-1" role="dialog"
                                                            aria-labelledby="myModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">View
                                                                            Boniface
                                                                            Ntwiga
                                                            </h5>
                                                                        <button type="button" className="close" data-dismiss="modal"
                                                                            aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <table
                                                                            className="table table-condensed table-hover table-stiped table-bordered">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th>Gender</th>
                                                                                    <td>Male</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Location</th>
                                                                                    <td>Meru</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Age</th>
                                                                                    <td>41</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Access Code</th>
                                                                                    <td><span
                                                                                        className="label label-success">Completed</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Splash Page</th>
                                                                                    <td><span
                                                                                        className="label label-success">Completed</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Turn off Autoplay</th>
                                                                                    <td><span
                                                                                        className="label label-success">Completed</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>M-Pesa Training</th>
                                                                                    <td><span
                                                                                        className="label label-success">Completed</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Comments</th>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Updated By</th>
                                                                                    <td>Ann Njoki</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Updated On</th>
                                                                                    <td>14th Mar 2019 16:33 pm</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-default"
                                                                            data-dismiss="modal">Close</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex flex-row-reverse">
                                        <form action="#" method="get">
                                            <button className="btn btn-rounded" type="submit">
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                        </form>
                                        <form action="#" method="get">
                                            <button className="btn btn-rounded mx-2" type="submit">
                                                <FontAwesomeIcon icon={faChevronLeft} />
                                            </button>
                                        </form>
                                        <span className="font-weight-normal">of 9</span>
                                        <select name="page" id="page" className="form-control mr-2">
                                            <option value="1" selected="">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <span className="font-weight-normal mr-2">Page</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Daily Target</h5>

                                    <Pie data={data} />
                                    <div className="row task-status mt-5">
                                        <div className="col-sm-3 bg-primary text-center">
                                            <span>Assigned</span>
                                            <div>
                                                5
                                </div>
                                        </div>
                                        <div className="col-sm-3 bg-warning text-center">
                                            <span>In Progress</span>
                                            <div>
                                                5
                                </div>
                                        </div>
                                        <div className="col-sm-3 bg-success text-center">
                                            <span>Completed</span>
                                            <div>
                                                5
                                </div>
                                        </div>
                                        <div className="col-sm-3 bg-danger text-center">
                                            <span>Deferred</span>
                                            <div>
                                                5
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card search">
                                <div className="card-body">
                                    <h5 className="card-title">Search</h5>
                                    <form action="#" method="post" acceptCharset="utf-8">
                                        <div className="form-group">
                                            <label className="control-label mb-10">Customer Phone</label>
                                            <input type="number" name="customer_phone" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label mb-10">Task Status</label>
                                            <select className="form-control select2" name="task_status">
                                                <option value="">---Select Task Status---</option>
                                                <option value="1|Assigned">Assigned</option>
                                                <option value="3|Completed">Completed</option>
                                                <option value="4|Deferred">Deferred</option>
                                                <option value="2|In Progress">In Progress</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label mb-10 text-left">Date Assigned</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control datepicker" value="12-02-2012" />
                                                <div className="input-group-addon">
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <a href="https://mpesa.mawingunetworks.com/customers/close-tasks-search"
                                                className="btn btn-default pull-right"><FontAwesomeIcon icon={faSearch} /> Close Search</a>
                                            <button type="submit" className="btn btn-warning pull-right"><FontAwesomeIcon icon={faSearch} />
                                                Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;