import React, {Component} from "react";
import {useParams, useLocation} from "react-router-dom";

import qs from 'querystring';

// https://www.cnblogs.com/wwp666/p/15977149.html v6接收参数
//命名格式xxxWithRouter
/*function DetailWithRouter(Detail) {
    let params = useParams();
    return (props) => {
        // const search = qs.parse(useLocation().search.slice(1));
        // const state = useLocation().state;
        // params = Object.assign(params, state)
        return <Detail/>
    }
}*/
const DetailData = [
    {id:'01', content:'你好，中国'},
    {id:'02', content:'你好，尚硅谷'},
    {id:'03', content:'你好，未来的自己'},
];
// V5 使用类组件获取params参数
/*export default class Detail extends Component {
    render() {
        /!*console.log(this);
        console.log("啦啦", this.props);*!/
        // 接收url params参数
        // const {id, title} = this.props.match.params;
        // 接收 search参数
        const {search} = this.props.location;
        // 使用qs格式化urlencoded格式的search数据
        const {id, title} = qs.parse(search.slice(1));
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id;
        });
        return (
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>content: {findResult.content}</li>
                </ul>
            </div>
        );
    }
}*/

/**
 * V6的function组件和钩子来配合获取值
 *
 * @param props
 * @constructor
 */
export default function Detail(props) {
    // const {children} = props;
    console.log("props", props);
    console.log("params", useParams());
    console.log("location", useLocation());
    // 使用钩子接收params参数
    // const {id, title} = useParams();
    // 使用钩子接收search参数，并且配合querystring进行格式化数据
    console.log("parse", qs.parse((useLocation().search).slice(1)));
    const {id,title} = qs.parse((useLocation().search).slice(1));
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id;
    });
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {findResult.content}</li>
            </ul>
        </div>
    );
}
