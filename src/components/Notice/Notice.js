import * as React from 'react';
import * as Styles from './Notice.scss';

export default class Notice extends React.Component {
    fadeTimer = null;

    constructor(props) {
        super(props)
    }

    state = {
        message: []
    }

    componentDidMount() {
        
    }

    addNotice = async (tip) => {
        const { message } = this.state;
        const newNotice = tip;
        const newKey = this.getKey();
        if(message.length === 0) {
            let newMsg = [];
            newMsg.push({
                content: newNotice,
                key: newKey
            });
            await this.setState({
                message: newMsg
            });
            setTimeout(() =>{
                this.removeNotice(newKey);
            },2000);
            
        } else {
            let msg = message;
            let newMsg = [];
            let flag = msg.forEach((item,index) => {
                if(item.key === newKey) return true;
            });
            if(flag) return;
            newMsg.push({
                content: newNotice,
                key: newKey
            });
            await this.setState({
                message: [...message,...newMsg]
            });
            setTimeout(() =>{
                this.removeNotice(newKey);
            },2000);
        }
        
    }

    removeNotice = (key) => {
        const { message } = this.state;
        this.setState(state => ({
            message: state.message.filter(item => {
                if(item.key === key) {
                    return false;
                }
                return true;
            })
        }))
    }

    getKey = () => {
        return `notice-${new Date().getTime()}`;
    }



    render() {
        const { message } = this.state;
        return <React.Fragment>
            {
                message.map((item,index) => {
                    return <React.Fragment key={index}>
                        <div className={Styles.contanier} style={{top: `${index * 40 }px`}}>
                            {item.content}
                        </div>
                    </React.Fragment>
                })
            }
        </React.Fragment>
    }
}

