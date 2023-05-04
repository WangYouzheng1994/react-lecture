import React, {Component} from 'react';
import './index.css'

class Index extends Component {
    state = {mouse: false}

    /**
     * 鼠标移入移出的回调
     *
     * @param flag
     * @returns {(function(): void)|*}
     */
    handleMouseover = (flag) => {
        return () => {
            // console.log(flag);
            this.setState({mouse: flag})
        }
    }

    /**
     * 勾选的回调
     */
    handleCheck = () => {

    }

    render() {
        // console.log(this.props);
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouseover(true)}
                onMouseLeave={this.handleMouseover(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}> 删除</button>
            </li>
        );
    }
}

export default Index;