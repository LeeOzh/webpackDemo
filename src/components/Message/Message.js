import * as React from 'react';
import * as Styles from './Message.scss';
import Notice from '../Notice/Notice';
import ReactDOM from 'react-dom';

function createNode(el) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notice />,div)
}

export default  {
    error(message) {
        createNode(message);
    }
}





