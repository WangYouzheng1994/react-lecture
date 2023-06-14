import React, {Component} from 'react'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id:'01', title: '消息1'},
            {id:'02', title: '消息2'},
            {id:'03', title: '消息5555'},
        ]
    }
    render() {
        let {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        /*<li>
                            <a>message001</a>
                        </li>
                        <li>
                            <a>message002</a>
                        </li>
                        <li>
                            <a>message003</a>
                        </li>*/
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                <a>{msgObj.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                {/*切记，如果要写js代码 必须要用花括号括起来 <ul><li>{messageArr.length}</li></ul>*/}
                <hr/>
                <Detail/>
            </div>
        )
    }
}
