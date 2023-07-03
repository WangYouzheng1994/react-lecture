import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

const Home = () => {
    const [sum, setSum] = useState(1);
    return (
        <div>
            <h2>我是Home</h2>
            {sum === 2 ? <Navigate to="/about"></Navigate> : <h4>当前sum的值是: {sum}</h4>}
            {/*{sum ===2 ? <NavLink replace to="/about"></NavLink>}*/}
            <button onClick={()=> setSum(2)}>点我将sum改变为2 并且跳转~</button>
        </div>
    );
};

export default Home;
