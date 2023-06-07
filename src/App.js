
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Users from './pages/Users'
import Albums from './pages/Albums';
import AlbumPhoto from './pages/AlbumPhoto';



const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    children: [  
      {
        path: `/HW-30`, element: <Users />
      }, 
      {
        path: `/HW-30/user/:userId`, element: <Albums />
      },
      {
        path: `/HW-30/album/:albumId`, element: <AlbumPhoto />
      }
    ]
  }

])



function App() {


  return (

    <RouterProvider router={router} />

  );
}

export default App;
