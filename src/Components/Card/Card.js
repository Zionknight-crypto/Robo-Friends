import React from 'react';

const Card = ({name, email, username, id}) => {  // even shorter destructuring within the parameter field (works automatically)
    // const {name, email, username, id} = props; general destructuring
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <h5>{email}</h5>
            </div>
        </div>
    );
}

export default Card;