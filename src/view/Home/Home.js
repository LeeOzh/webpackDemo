import * as React from 'react';
import * as Styles from './home.scss';
import avatarImg from '../../assets/images/avatar.png'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
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