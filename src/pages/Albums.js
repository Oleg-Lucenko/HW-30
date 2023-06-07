import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import Album from "./components/Album";


function Albums() {

    const params = useParams();

    const [albums, setAlbum] = useState([]);

    useEffect(() => {
      async function albumsRequest() {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const albums = await response.json();
      setAlbum(albums);
    };
  
    albumsRequest();
  }, []);

  const albumsOfUser = albums.filter(album => album.userId == params.userId);

    return (
        <ul className="album-list"> 
        { albumsOfUser.map((album) => (
                <Album album={album}/>
            ))}
        </ul>
    )



}

export default Albums;