import * as React from 'react';
import * as Styles from './Notice.scss';

export default class Notice extends React.Component {
    fadeTimer = null;

    constructor(props) {
        super(props)
    }

    state = {
        message: ['登陆失败']
    }

    componentDidMount() {
        console.log(this.props.text)
    }

    componentDidUpdate() {
        const { message } = this.state;
        
    }

    render() {
        const { message } = this.state;
        
        return <React.Fragment>
            {
                message.map((item,index) => {
                    return <React.Fragment key={index}>
                        <div className={Styles.contanier} >
                            {item}
                        </div>
                    </React.Fragment>
                })
            }
        </React.Fragment>
    }
}

