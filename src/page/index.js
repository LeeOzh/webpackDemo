import * as React from 'react';
import * as Styles from './index.scss';
import { HashRouter as Router, Route, Redirect,} from 'react-router-dom';
import Modal from '../components/Modal/modal';
import Login from '../view/Login/Login';
import Home from '../view/Home/Home';
import About from '../view/About/About';

export default class App extends React.Component {
    
    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        
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

