import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;

        // 使用nanoid 生成id
        const personObj = {id: nanoid(), name, age}
        console.log(personObj);
        this.props.createAddPersonAction(personObj);
    }

    render() {
        return (
            <div>
                <h2>我是Person组件, 上方组件求和为{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字'/>
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'/>
                <button onClick={this.addPerson}>添加</button>

                <ul>
                    {
                        this.props.peoples.map((p)=> {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                    {/*<li>名字1-年龄1</li>
                    <li>名字2-年龄2</li>
                    <li>名字3-年龄3</li>*/}
                </ul>
            </div>
        );
    }
}

// export default Person;


export default connect(
    // state.count 值的是 countReducer
    // state => ({count: state}),
    state => ({peoples: state.person, count: state.count}),

    /*dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jiaAsycn: (number,time) => dispatch(createIncrementAsyncAction(number, 500)),
        jian: number => dispatch(createDecrementAction(number))
    }*/
    {
        createAddPersonAction
    }
)(Person);
