import App from '../App';

const Postcard = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState([]);
    const [title, setTitle] = useState('');
    const [greeting, setGreeting] = useState('');
  
    useEffect(() => {
        GetImages();
    }, []);

    const GetImages = () => {
        fetch(api_base + '/images')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch((err) => console.error("Error: ", err));
    }
  
    return (
        <>
			{/* Text input */}
			<label for="greeting">Greeting:</label>
      <input id="greeting" type="text" onChange={event => setGreeting(event.target.value)} /> 
			<label for="smalltext">Smalltext:</label>
      <input id="smalltext" type="text" onChange={event => setTitle(event.target.value)} /> 
			{/* Sticker Image Choice */}
			<label for="imgchoice">Choice of image:</label>
			<select id="imgchoice" onChange={(e) => { const i = images?.find((x) => x.assetName === e.target.value); setSelectedImage(i);}}>
        {images ? images.map((image) => {
          return <option key={image._id} value={image.assetName}>{image.assetName}</option>;
        })
        : null}
      </select>  
        <div className="postcard" style={{width: "670px", height: "480px", backgroundColor: "aliceblue", position: 'relative', overflow: 'auto', padding: '0'}}>
            <Draggable bounds="parent" grid={[25, 25]}>
                        <div style={{width: "70px", height: "80px", backgroundColor: "aliceblue"}}>{title}</div>
            </Draggable>
            <Draggable bounds="parent" grid={[25, 25]}>
                        <div style={{width: "200px", height: "80px", fontSize: "40px"}}>{greeting}</div>
            </Draggable>
                    <Draggable bounds="parent" grid={[25, 25]}>
                <img src={selectedImage.imageUrl} style={{width: "300px"}}></img>
            </Draggable>
        </div>
    </>
)}

export default Postcard;