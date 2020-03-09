import * as React from 'react';
import * as Styles from './home.scss';
import avatarImg from '../../assets/images/avatar.png';
import { withRouter, useHistory } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.checkLogin();
    }

    checkLogin = () => {
        const { history } = this.props;
        const token = localStorage.getItem('token');
        console.log(typeof(token))
        token !== "undefined" ? null : history.push('/login');
    }
    
    render() {
        return <React.Fragment>
            <div className={Styles.main}>
                <div className={Styles.leftContainer}>
                    <div className={Styles.avatar}>
                        <img src={avatarImg} />
                    </div>
                    <h3>昵称：前端詹姆斯</h3>
                    <div className={Styles.content}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default withRouter(Home)