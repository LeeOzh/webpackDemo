import * as React from 'react';
import * as Styles from './Message.scss';
import Notice from '../Notice/Notice';
import ReactDOM from 'react-dom';

function createDiv() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notice />,div)
    return {
        addNotice(notice) {
            return notification.addNotice(notice);
        },
        destory() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}

let notification;

export default  {
    error(message) {
        if(notification) {
            notification.addNotice(message);
            return;
        }
        notification = createDiv(message);
        notification.addNotice(message)
        
    }
}





