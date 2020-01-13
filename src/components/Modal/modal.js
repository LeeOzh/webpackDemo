import * as React from 'react';
import * as Styles from './modal.scss';

export default function Modal(props) {
    
    const { visible, onOk, onCancel, title, sureText, content } = props;

    return <React.Fragment>
        <div onClick={(e) => { onCancel() }} className={`${Styles.mask} ${visible ? Styles.dis : null}`}>
        </div>
        <div className={`${Styles.modal} ${visible ? Styles.show : Styles.fadeOut}`}>
            <p className={Styles.title}>{title}</p>
            <div style={{ textAlign: 'center', paddingTop: 50, fontSize: 30 }}>
                {content}
            </div>
            <div className={Styles.footer}>
                <p onClick={() => { onOk() }} className={Styles.sure}>{sureText ? sureText : "确定"}</p>
            </div>
        </div>
    </React.Fragment>
}