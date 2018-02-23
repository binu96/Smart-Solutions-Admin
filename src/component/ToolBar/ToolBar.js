import React from 'react'

import './tool-bar.css'

class ToolBar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="">
                                <h1 className="nav-bar-title">Smart Solutions Admin</h1>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="login.html"
                                       className="dropdown-toggle navbar-nav__user-details-dropdown"
                                       data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default ToolBar