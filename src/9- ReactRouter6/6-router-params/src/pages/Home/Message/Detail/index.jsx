import React from 'react';
import {useParams} from 'react-router-dom';

function Detail(props) {
    const {id, title, content} = useParams();
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
