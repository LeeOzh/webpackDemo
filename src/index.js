import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './page/index'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    render() {
        return <React.Fragment>
            <App/>
        </React.Fragment>
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));