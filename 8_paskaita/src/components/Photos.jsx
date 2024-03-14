import { useEffect, useState } from "react";
import { fetchPhotos } from "../api";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos()
      .then((response) => setPhotos(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol>
        {photos.map((photo) => (
          <li key={photo.id}>
            {photo.title} <br /> {photo.thumbnailUrl}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Photos;
