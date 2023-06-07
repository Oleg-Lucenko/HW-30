import {NavLink} from 'react-router-dom';
import './album.css'

function Album({album}) {


  return (

    <li className='album-item'>
        <p>User ID: {album.userId}</p>
        <p>Album ID: {album.id}</p>
        <p>Album title: {album.title}</p>
       <NavLink to={`/album/${album.id}`}>Photo</NavLink>

    </li>

  );
}

export default Album;