const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://lawsdev:Codeshow@lawsdev.qob4yyh.mongodb.net/MERNData?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
	.then(() => console.log("You have successfully connected!!!!"))
	.catch(console.error);

// Image Model 
const Image = require('./models/ImageModel');

app.get('/images', async (req, res) => {
	const images = await Image.find();

	res.json(images);
});

app.post('/image/new', (req, res) => {
	const image = new Image({
		imageUrl: req.body.imageUrl,
		assetName: req.body.assetName
	})

	image.save();

	res.json(image);
});

app.put('/image/update/:id', async (req, res) => {
	const image = await Image.findById(req.params.id);

	image.assetName = req.body.assetName;
	image.imageUrl = req.body.imageUrl;

	image.save();

	res.json(image);
});

// Background Image Model
const BGImage = require('./models/BGImageModel');

app.get('/bgimages', async (req, res) => {
	const bgimages = await BGImage.find();

	res.json(bgimages);
});

app.post('/bgimage/new', (req, res) => {
	const bgimage = new BGImage({
		imageUrl: req.body.imageUrl,
		assetName: req.body.assetName
	})

	bgimage.save();

	res.json(bgimage);
});

app.put('/bgimage/update/:id', async (req, res) => {
	const bgimage = await BGImage.findById(req.params.id);

	bgimage.assetName = req.body.assetName;
	bgimage.imageUrl = req.body.imageUrl;

	bgimage.save();

	res.json(bgimage);
});




app.listen(3001, () => console.log("server: port 3001"));

