import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import * as Styles from './index.scss';
import Modal from '../components/Modal/modal';


export default class App extends React.Component {

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

// export default function App(props) {

//     const InpWrapper = useRef(null);

//     const [title, setTitle] = useState('Hello World');
//     const [isShow, setisShow] = useState(false);
//     const [link, setLink] = useState('https://www.baidu.com');
//     const [have, setHave] = useState([]);

//     const [selectKey, setSelectKey] = useState([])

//     const linkItem = [
//         {
//             name: '谷歌',
//             link: 'http://www.google.com/custom?q=&btnG=Search"'
//         },
//         {
//             name: '必应',
//             link: 'https://cn.bing.com/'
//         },
//         {
//             name: '雅虎',
//             link: 'https://search.yahoo.com'
//         },
//         {
//             name: '百度',
//             link: 'https://www.baidu.com/'
//         },
//         {
//             name: '这是一个神奇的网站',
//             link: 'https://lol.qq.com'
//         }
//     ];

//     const handleChange = async (isShow, key) => {
//         setisShow(isShow);
//         if (isShow === true) {
//             await Promise.all([
//                 setSelectKey([...selectKey, key])
//             ])
//         } else {
//             const index = selectKey.indexOf(key);
//             const arr = selectKey.splice(index, 1)
//             await setSelectKey(arr);
//             console.log(selectKey)
//         }
//         async function set(arr, key) {
//             return await [...arr, key]
//         }
//     }

//     const handleMask = (e) => {
//         setisShow(false);
//     }

//     const handleChangeLink = (link) => {
//         setLink(link);
//     }

//     const linkTo = () => {
//         setLink(InpWrapper.current.value);
//     }

//     useEffect(() => {
//         document.title = link;
//     })

//     const columns = [
//         {
//             title: 'name',
//             key: '1'
//         },
//         {
//             title: 'age',
//             key: '2'
//         },
//         {
//             title: 'sex',
//             key: '3'
//         },
//         {
//             title: 'adress',
//             key: '4'
//         },
//     ]

//     const data = [
//         {
//             key: 1,
//             name: 'lizihao',
//             age: 20,
//             sex: '男',
//             address: '美国 - 白宫',
//             children: [
//                 {
//                     key: 1.1,
//                     name: '超级赛亚人',
//                     age: 20,
//                     sex: '男',
//                     address: 'sadasfsafasfasf',
//                     children: [
//                         {
//                             key: 1.2,
//                             name: '我是猪',
//                             age: 20,
//                             sex: '女',
//                             address: 'N78星云'
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]

//     function draw(data) {
//         return data.map((item, index) => {
//             return item.children ?
//                 <React.Fragment>
//                     <tr>
//                         {
//                             Object.keys(item).map(key => {
//                                 if (key == 'children' || key == 'key') return;
//                                 if (item.children && key === 'name') {
//                                     return <td>{selectKey.indexOf(item.key) == -1 ? <i onClick={() => { handleChange(true, item.key) }} style={{ cursor: 'pointer' }}>+</i> : <i onClick={() => { handleChange(false, item.key) }} style={{ cursor: 'pointer' }}>-</i>} <span>{item[key]}</span></td>
//                                 }
//                                 return <td>{item[key]}</td>
//                             })
//                         }
//                     </tr>
//                     {
//                         selectKey.indexOf(item.key) !== -1 ?
//                             draw(item.children)
//                             :
//                             null
//                     }
//                 </React.Fragment>
//                 :
//                 <tr>
//                     {
//                         Object.keys(item).map(key => {
//                             if (key == 'children' || key == 'key') return;
//                             return <td>{item[key]}</td>
//                         })
//                     }
//                 </tr>
//         })
//     }

//     return <React.Fragment>
//         <div className={Styles.main}>

//             {/* <div className={Styles.modalBtn} onClick={() => {handleChange(true)}}>Modal</div>
//             <Modal
//             title="Modal"
//             visible={isShow}
//             onOk={() => {handleChange(false)}}
//             onCancel={() => {handleChange(false)}}
//             content={
//                 <div>干哈呀猪头林?</div>
//             }
//             /> */}

//             <table>
//                 <thead style={{ background: 'grey' }}>
//                     <tr>
//                         {
//                             columns.map((item, index) => {
//                                 return (
//                                     <td>{item.title}</td>
//                                 )
//                             })
//                         }
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {draw(data)}
//                     {/* {
//                         data.map((item, index) => {
//                             console.log(item['children'])
//                             return <React.Fragment>
//                                 <tr>
//                                     {
//                                         Object.keys(item).map(key => {
//                                             if (key == 'children' || key == 'key') return;
//                                             if (item.children && key === 'name') {
//                                                 return <td>{i} <span>{item[key]}</span></td>
//                                             }
//                                             return <td>{item[key]}</td>
//                                         })
//                                     }
//                                 </tr>
//                                 {
//                                     isShow ?
//                                         <tr>
//                                             {
//                                                 item.children ?
//                                                     item['children'].map(item => {
//                                                         return Object.keys(item).map(key => {
//                                                             if (key == 'children' || key == 'key') return;
//                                                             return <td>{item[key]}</td>
//                                                         })
//                                                     })
//                                                     :
//                                                     null
//                                             }
//                                         </tr>
//                                         :
//                                         null
//                                 }

//                             </React.Fragment>
//                         })
//                     } */}


//                 </tbody>
//             </table>
//         </div>
//     </React.Fragment>
// }

