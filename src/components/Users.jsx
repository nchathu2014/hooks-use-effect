import React from 'react';

const Users = ({users}) => {
  
  return(
    <ul className='user-container'>
      {users.map(user => 
    
      <li key={user.id}>
        
          <ul>
          <li>Email: {user.email} </li>
          <li>Name: {user.name}</li>
          <li>Body: {user.body}</li>
          </ul>
      
      </li>)}
    </ul>
  );
}


export default Users;