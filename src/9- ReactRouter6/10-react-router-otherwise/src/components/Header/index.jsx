import React from 'react';
import {useNavigate} from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate();
    /**
     * 后退
     */
    function back() {
        navigate(-1)
    }

    /**
     * 前进
     */
    function forward() {
        navigate(1)
    }

    return (
        <div className="row">
            <header className="pb-3 mb-4 mt-2 border-bottom">
                <h1>React Router Demo</h1>
                <button onClick={forward}>前进→</button>
                <button onClick={back}>←后退</button>
            </header>
        </div>
    );
}

export default Header;
