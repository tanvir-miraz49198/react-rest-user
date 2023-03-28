import React from 'react';
import './user.css'

const User = (props) => {
    const {name,id,email,username,website} = props.user;
    return (
        <div className='user'>
            <h1>Name :- {name}</h1>
            <h2>User Name :- {username}</h2>
            <h3>Id :- {id}</h3>
            <h4>Email :- {email}</h4>
            <p>Website :- {website}</p>
        </div>
    );
};

export default User;