import React from 'react';
import {useSearchParams} from 'react-router-dom';

function Detail(props) {
    const [search, setSearch] = useSearchParams();
    console.log(search.get('id'));
    return (
        <>
            <div>i am detail</div>
            <ul>
                <li>id:{search.get('id')}</li>
                <li>title:{search.get('title')}</li>
                <li>content:{search.get('content')}</li>
            </ul>
        </>
    );
}

export default Detail;
