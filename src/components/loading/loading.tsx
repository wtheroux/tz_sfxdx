import React from "react"; 

import './loading.scss';

const Loading: React.FC = () => {
    return(
        <div className="loader">
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loading;