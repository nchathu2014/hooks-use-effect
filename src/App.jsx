import React,{useEffect,useState} from 'react';
import './App.css';
import Users from './components/Users';




/* fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data)); */

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setUsers(data));
    
  },[])
  return (
    <main>
      <h1>Users</h1>
      {users.length > 0 && <Users users={users}/>}

      
    </main>
  );
}

export default App;

