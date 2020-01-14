import * as React from 'react';
import * as Styles from './index.scss';
import { useState, useRef, useEffect } from 'react';
import { Router, Link, navigate,} from '@reach/router';
import Modal from '../components/Modal/modal';
import Login from '../view/Login/Login';
import Home from '../view/Home/Home';

export default class App extends React.Component {

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        const token = localStorage.getItem('token');
        token ? null : navigate('/login');
    }
    
    render() {
        return <React.Fragment>
        <div className={Styles.main}>
            <Router mode="hash" basepath="/">
                <Home path="/home" />
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

