import * as React from 'react';
import * as Styles from './index.scss';
import { useState, useRef, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import Modal from '../components/Modal/modal';
import Login from '../view/Login/Login';

export default class App extends React.Component {

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        const token = localStorage.getItem('token');
        token ? null : navigate('/login')
    }
    
    render() {
        const Home = () => {
            return (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )
        }

        const Dash = () => {
            return (
                <div>
                    hello world
                </div>
            )
        }

        return <React.Fragment>
        <div className={Styles.main}>
            <Router>
                <Home path="/" />
                <Dash path="dashboard" />
            </Router>
            <Router>
                <Login path="/login" />
            </Router>

        </div>
        </React.Fragment>
    }
}


// export default function App(props) {

    

//     return <React.Fragment>
        
//     </React.Fragment>
// }

