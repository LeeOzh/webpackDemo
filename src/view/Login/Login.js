import * as React  from 'react';
import * as Styles from './Login.scss';
import { navigate } from '@reach/router';
import loginIcon from '../../assets/images/login.png'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        isLogin: false,
        modalIndex: 0
    }

    render() {
        return <React.Fragment>
            <div className={Styles.Contanier}>
                <div className={Styles.signIn}>
                    <p>
                        <img src={loginIcon}></img>
                        {' '}Sign In
                    </p>
                </div>
                <div className={Styles.signUp}>

                </div>
            </div>
        </React.Fragment>
    }
}
