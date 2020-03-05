import * as React  from 'react';
import * as Styles from './Login.scss';
import loginIcon from '../../assets/images/login.png';
import message from '../../components/Message/Message';
import request from '../../classes/request/request';

export default class Login extends React.Component {
    accWrapper;
    
    pwdWrapper;

    constructor(props) {
        super(props);
    }

    state = {
        isLogin: false,
        modalIndex: 0,
        account: false,
        pwd: false,
        expend: false
    }

    componentDidMount() {
    }

    handleLogin = () => {
        const account  = this.accWrapper.value;
        const password = this.pwdWrapper.value;
        if(account === '' || password === '') {
            if(account) {
                this.setState({
                    pwd: true
                })
                message.error('请输入密码')
                return;
            }
            if(password) {
                this.setState({
                    account:true
                })
                message.error('请输入账号')
                return;
            }
            this.setState({
                account: true,
                pwd: true
            })
            message.error('请输入账号-密码')
            return;
        }
        request.post('http://106.15.206.33:3100/user/login',{
            user: account,
            pwd: password
        }).then(res => {
            if(200 !== res.status) {
                message.error(res.message);
                return;
            }

        })
        
        
    }

    change = (index,value) => {
        if(value) {
            index === 1? 
            this.setState({
                account: false
            })
            :
            this.setState({
                pwd: false
            })
        }
    }

    handleExpend = () => {
        this.setState({
            expend: true
        })
        message.error('暂不提供注册')
    }

    render() {
        const { account, pwd,expend } = this.state;

        return <React.Fragment>
            <div className={Styles.Contanier}>
                <div className={Styles.bg}></div>
                <div className={`${Styles.signIn} ${expend ? Styles.expendSignIn : null}`}>
                    <p>
                        <img src={loginIcon}></img>
                        {' '}Sign In
                    </p>
                    <div className={Styles.input}>
                        <input
                         ref={ref => {this.accWrapper = ref}} 
                         placeholder="account"
                         className={`${Styles.account} ${account ? Styles.noValue : null} `}
                         onChange={() => {this.change(1,this.accWrapper.value)}} />
                        <input
                         ref={ref => {this.pwdWrapper = ref}} 
                         placeholder="password" 
                         className={`${Styles.password} ${pwd ? Styles.noValue : null} `}
                         onChange={() => {this.change(2,this.pwdWrapper.value)}} />
                    </div>
                    <button onClick={() => {this.handleLogin()}}>Login</button>
                    <div className={Styles.action}>
                        <p><span>Forget The Password?</span></p>
                        <button onClick={() => {this.handleExpend()}}>SignUp</button>
                    </div>
                </div>
                <div className={`${Styles.signUp} ${expend ? Styles.expendSignUp : null}`}>
                    你不配注册
                </div>
            </div>
        </React.Fragment>
    }
}
