import {NavLink} from 'react-router-dom';
import './user.css';

function User({user}) {


  return (

      <li className='user-item'>
            <div className='general-info'>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>

            <div className='address'>
              <span>Adress:</span>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.zipcode}</p>
                <div>
                  <span>Geo: </span>
                  <p>lat: {user.address.geo.lat} </p>
                  <p>lng: {user.address.geo.lng}</p>
                </div>
            </div>
          <p className='phone'>Phone: <br /> {user.phone}</p>
          <div className='company-info'>
            <span>Company:</span>
            <p>Company name: {user.company.name}</p>
            <p>CatchPhrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
          </div>

          <NavLink to={`/user/${user.id}`} className='album-link'>Album</NavLink>

        </li>

  );
}

export default User;