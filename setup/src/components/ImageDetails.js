import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ImageDetails() {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // fetch(`http://contest.elecard.ru/frontend_data/catalog.json`)
      .then(response => response.json())
      .then(data => {
        const item = data.find(item => item.image == id);
        setImageData(item);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{imageData.category}</h1>
      <img src={`http://contest.elecard.ru/frontend_data/${imageData.image}`} alt={imageData.id} />
      <p>{imageData.filesize}</p>
    </div>
  );
}

export default ImageDetails;
