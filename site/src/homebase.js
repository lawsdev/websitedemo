import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import HomePage from './pages/Home';

const api_base = 'http://localhost:3001';


function Homebase ({ children }) {
	const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

	useEffect(() => {
		GetImages();
	}, []);

	const GetImages = () => {
		fetch(api_base + '/images')
			.then(res => res.json())
			.then(data => setImages(data))
			.catch((err) => console.error("Error: ", err));
	}

  // constExportPng = () => {
  //   constinput = document.getElementById("card")
  //   html2canvas (input, {logging: true, useCORS: true}).then(canvas => {
  //     const imgWidth = 670;
  //     const imgHeight = 480;
  //     const imgData = canvas.toDataURL('img/png');
  //   })
  // }

  return (
    <div>
      <HomePage>
        <div style={{width: "445px", height: "320px", position:"relative", backgroundColor:"wheat", padding: "1rem"}}>
        <div style={{position:"relative", backgroundColor:"wheat"}}>
          <label for="imgchoice">Choice of image:</label>
          <select id="imgchoice" onChange={(e) => { const i = images?.find((x) => x.assetName === e.target.value); setSelectedImage(i);}}>
            {images ? images.map((image) => {
              return <option key={image._id} value={image.assetName}>{image.assetName}</option>;
            })
            : null}
          </select>
        </div>
            <p style={{fontFamily:"Brush Script Mt"}}>drag me</p>
            <Draggable bounds="parent" grid={[25, 25]}>
                <img src={selectedImage.imageUrl} style={{width: "20vh"}}></img>
            </Draggable>
          </div>
      </HomePage>
    </div>
  );
}

export default Homebase;