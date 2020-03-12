import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid black', height: '600px', padding: '1rem 0'}} >
            {props.children}
        </div>

    )
};


export default Scroll;

// props.children allows for scrolling through child components without scrolling through the entire page. 