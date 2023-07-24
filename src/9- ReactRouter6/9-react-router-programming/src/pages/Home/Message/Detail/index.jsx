import React from 'react';
import {useLocation} from 'react-router-dom';

function Detail(props) {
    const {state:{id, title, content}} = useLocation();

    return (
        <>
            <div>i am detail</div>
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>
        </>
    );
}

export default Detail;
