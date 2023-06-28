import React, {Component} from 'react';
import Parent from "../Parent";
import MyContext from '../../context/Mycontext'

/*
为了解决跨组件传递，以及暂时性死区的问题
// 创建一个Context容器对象，首字母大写的原因是他要在jsx中作为组件标签。
export const MyContext = React.createContext();
*/

// 直接解构赋值
const {Provider} = MyContext;

class Grand extends Component {
    state = {username:'grand'}
    render() {
        return (
            <div className="grand">
                <h2>你好，我是grand</h2>
                <h3>我的名字是：{this.state.username}</h3>
                {/*<MyContext.Provider>
                    <Parent/>
                </MyContext.Provider>*/}
                <Provider value={{username:this.state.username,age:123}}>
                    <Parent/>
                </Provider>
            </div>
        )
    }
}

export default Grand;
