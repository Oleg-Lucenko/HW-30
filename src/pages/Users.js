import {useEffect} from 'react';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import User from './components/User'
import './pages.css';

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function usersRequest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
  };

  usersRequest();
}, []);

    return (
        <ul className="users-list">
        {users.map((user) => (
          <User user={user}/>

        ))}
    </ul>
  )



}

export default Users;