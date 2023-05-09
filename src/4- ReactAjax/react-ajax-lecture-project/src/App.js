import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
    getDatalist = () => {
        // axios.get('http://localhost:8080/boot3-system/demo/list').then( // 在package.json中配置的话，ip继续写当前前端工程的ip
        axios.get('http://localhost:3000/boot3-system/demo/list').then(
            response => {
                console.log('getdatalist', response)
            },
            error => {
                console.log('有点问题')
            }
        )
    }

    getData = () => {
        console.log('123')
        // axios.get('http://localhost:8080/boot3-system/demo/info').then(
        axios.get('http://localhost:3000/boot3-system/demo/info').then(
            response => {
                console.log('getDataInfo', response)
            },
            error => {
                console.log('有点问题')
            }
        )
    }

    render() {
        return <div className="App">
            1233213213213221
            <button onClick={this.getDatalist}>获取数据list</button>
            <button onClick={this.getData}>获取数据one</button>
        </div>
    }
}
