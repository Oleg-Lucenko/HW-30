
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
        path: `/`, element: <Users />
      }, 
      {
        path: `/user/:userId`, element: <Albums />
      },
      {
        path: `/album/:albumId`, element: <AlbumPhoto />
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
