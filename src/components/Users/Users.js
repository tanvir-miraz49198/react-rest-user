import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './users.css'

const Users = () => {
    const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])


    return (
        <div>
            <h1>Hello Users !!!</h1>

<div className='users'>
{
  users.map(people => <User
  user = {people}
  ></User>)
}
</div>
          
        </div>
        
    );
    
};





export default Users;