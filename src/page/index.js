import * as React from 'react';
import * as Styles from './index.scss';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from '../components/Modal/modal';
import Login from '../view/Login/Login';
import Home from '../view/Home/Home';
import About from '../view/About/About';

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
            <Router>


                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Router>
        </div>

        </React.Fragment>
    }
}


// export default function App(props) {

    

//     return <React.Fragment>
        
//     </React.Fragment>
// }

