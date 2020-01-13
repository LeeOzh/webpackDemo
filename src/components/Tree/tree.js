import * as React from 'react';
import * as Styles from './tree'
export default class Tree extends React.Component {

    columns = [
        {
            title: 'name',
            key: '1'
        },
        {
            title: 'age',
            key: '2'
        },
        {
            title: 'sex',
            key: '3'
        },
        {
            title: 'adress',
            key: '4'
        },
    ]

    data = [
        {
            key: 1,
            name: 'lizihao',
            age: 20,
            sex: '男',
            address: '美国 - 白宫',
            children: [
                {
                    key: 1.1,
                    name: '超级赛亚人',
                    age: 20,
                    sex: '男',
                    address: 'sadasfsafasfasf',
                    children: [
                        {
                            key: 1.2,
                            name: '我是猪',
                            age: 20,
                            sex: '女',
                            address: 'N78星云',
                            children: [
                                {
                                    key: 1.2,
                                    name: '我是猪',
                                    age: 20,
                                    sex: '女',
                                    address: 'N78星云'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            key: 2,
            name: '林克',
            age: 20,
            sex: '男',
            address: '初始平地',
            children: [
                {
                    key: 2.1,
                    name: '超级马里奥',
                    age: 30,
                    sex: '中性',
                    address: '马里奥地图'
                }
            ]
        }
    ]

    constructor(props) {
        super(props);
    }

    state = {
        selectKey: []
    }

    handleChange = async (isShow,key) => {
        const { selectKey } = this.state;
        if (isShow === true) {
            let arr = [...selectKey,key]
            await this.setState({
                selectKey: arr
            })
        } else {
            const index = selectKey.indexOf(key);
            let arr = selectKey;
            arr.splice(index,1)
            await this.setState({
                selectKey: arr
            })
        }
    }

    draw = (data) => {
        const { selectKey } = this.state;
        return data.map((item, index) => {
            return item.children ?
                <React.Fragment>
                    <tr>
                        {
                            Object.keys(item).map(key => {
                                if (key == 'children' || key == 'key') return;
                                if (item.children && key === 'name') {
                                    return <td>{selectKey.indexOf(item.key) == -1 ? <i onClick={() => { this.handleChange(true, item.key) }} style={{ cursor: 'pointer' }}>+</i> : <i onClick={() => { this.handleChange(false, item.key) }} style={{ cursor: 'pointer' }}>-</i>} <span>{item[key]}</span></td>
                                }
                                return <td>{item[key]}</td>
                            })
                        }
                    </tr>
                    {
                        selectKey.indexOf(item.key) !== -1 ?
                            this.draw(item.children)
                            :
                            null
                    }
                </React.Fragment>
                :
                <tr>
                    {
                        Object.keys(item).map(key => {
                            if (key == 'children' || key == 'key') return;
                            return <td>{item[key]}</td>
                        })
                    }
                </tr>
        })
    }

    render() {
        return <React.Fragment>
            <div className={Styles.main}>


                <table>
                    <thead style={{ background: 'grey' }}>
                        <tr>
                            {
                                this.columns.map((item, index) => {
                                    return (
                                        <td>{item.title}</td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.draw(this.data)}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    }

}