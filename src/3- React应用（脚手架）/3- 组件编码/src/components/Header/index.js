import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'

class Index extends Component {
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlekeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }

    handlekeyUp = (event) => {
        const {keyCode, target} = event;
        // 回车的时候才赋值
        if (keyCode === 13) {
            if (target.value) {
                // console.log(target.value);
                // 使用uuid作为id，安装nano id pnpm i nanoid
                const todoObj = {id: nanoid(), name: target.value, done: false}
                this.props.addChild(todoObj);
            } else {
                alert('请输入内容，不得为空！');
            }
        }
    }
}

export default Index;