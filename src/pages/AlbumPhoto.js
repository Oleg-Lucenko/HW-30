import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import './AlbumPhoto.css';



function AlbumPhoto () {
    
    const params = useParams();

    const [albumPhotos, setPhotos] = useState([]);

    useEffect(() => {
      async function photoRequest() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await response.json();
      setPhotos(photos);
    };
  
    photoRequest();
  }, []);

    const photosOfTheAlbum = albumPhotos.filter(photo => photo.albumId == params.albumId);



    return (

        <ul className="album-img">
            {photosOfTheAlbum.map((photo) => (
                <li>
                    <img src={photo.thumbnailUrl}  />
                </li>
            ))}
        </ul>
    )
}

export default AlbumPhoto;