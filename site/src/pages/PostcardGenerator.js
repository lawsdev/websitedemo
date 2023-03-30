import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Draggable from 'react-draggable';
import "../components/postcard.css";

const api_base = 'http://localhost:3001';

const Postcard = () => {

    // BGImages
    const [bgimages, setBgImages] = useState([]);
    const [selectedBgImage, setSelectedBgImage] = useState([]);

    useEffect(() => {
        GetBgImages();
    }, []);

    const GetBgImages = () => {
        fetch(api_base + '/bgimages')
            .then(res => res.json())
            .then(data => setBgImages(data))
            .catch((err) => console.error("Error: ", err));
    } 
    
    // Sticker Images
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

    // Text Variables
    const [title, setTitle] = useState('');
    const [greeting, setGreeting] = useState('');

    return (
      <div className='postcardpage'>
        <div className='pagetitle'>
        <h3>Create a pixel art postcard!</h3>
        <h4><Link to="/">Home</Link></h4>
        </div>
        <div className='postcardcontainer'>
          <div className='input'>
          
          {/* Text input */}
          <label for="greeting">Greeting:</label>
          <input id="greeting" type="text" onChange={event => setGreeting(event.target.value)} />
          <label for="smalltext">Smalltext:</label>
          <input id="smalltext" type="text" onChange={event => setTitle(event.target.value)} />

          {/* Background Image Choice */}
          <label for="bgimgchoice">Choice of background image:</label>
          <select id="bgimgchoice" onChange={(e) => { const i = bgimages?.find((x) => x.assetName === e.target.value); setSelectedBgImage(i);}}>
            {bgimages ? bgimages.map((bgimage) => {
              return <option key={bgimage._id} value={bgimage.assetName}>{bgimage.assetName}</option>;
            })
            : null}
          </select>

          {/* Sticker Image Choice */}
          <label for="imgchoice">Choice of image:</label>
          <select id="imgchoice" onChange={(e) => { const i = images?.find((x) => x.assetName === e.target.value); setSelectedImage(i);}}>
            {images ? images.map((image) => {
              return <option key={image._id} value={image.assetName}>{image.assetName}</option>;
            })
            : null}
          </select>
        </div>
        {/* postcard! */}
          <div className="postcard">                          
              <Draggable bounds="parent" grid={[25, 25]}>
                <img src={selectedBgImage.imageUrl} className="bgimage"></img>
              </Draggable>
              <Draggable bounds="parent" grid={[25, 25]}>
                <div className='title'>{title}</div>
              </Draggable>
              <Draggable bounds="parent" grid={[25, 25]}>
                <div className='greeting'>{greeting}</div>
              </Draggable>
              <Draggable bounds="parent" grid={[25, 25]}>
                <img src={selectedImage.imageUrl} className="sticker"></img>
              </Draggable>
          </div>
        {/* about */}
          <div className='about'>
            <p>Make a cute pixel art post card. Drag around the images and text til you find a layout you like.</p>
            <p>This webpage communicates with a custom API that gets image data from a database, and delivers it to you.</p>
            <p>For now, you'll have to take a screen shot. Sorry bout that.</p>
          </div>
          </div>
    </div>
)}

export default Postcard;