import React, {Component} from 'react';
import axios from 'axios';

class Index extends Component {

    /**
     * 查询按钮事件
     */
    search = () => {
        // console.log(this.keyWordElement.value);
        // 常规解构赋值
        // const {value} = this.keyWordElement;
        // 连续解构赋值 可以解构多个this中的变量
        // const {keyWordElement: {value}, } = this;
        // alert(value);
        // 连续解构赋值的 重命名，比如我不想让他用value 要改个名字为inputVal
        const {keyWordElement: {value: inputVal}}= this;

        // 为什么这里不跨域？因为GIthub的后端服务器使用了CORS解决了跨域问题
        axios.get(`https://api.github.com/search/users?q=${inputVal}`).then(resp => {
            console.log("成功了", resp.data);
        }, error => {
            console.error("异常了", error)
        })
    }

    render() {
        return (
            <div className="row p-4 bg-body-secondary">
                <h3>Search Github Users</h3>
                <div className="col-4">
                    {/*使用回调绑定*/}
                    <input ref={c => this.keyWordElement = c} type="text" className="form-control" placeholder="请输入关键字点击搜索"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-secondary mb-3" onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}

export default Index;
