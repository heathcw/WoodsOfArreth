require('./foobar.config.js');
const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({
	dest: '../public/images/',
	limits: {
		fileSize: 10000000
	}
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const url = 'mongodb+srv://' + userName + ':' + password + '@cluster0.hrjao.mongodb.net/arreth';

// connect to the database
mongoose.connect(url, {
  useNewUrlParser: true
});

const itemSchema = new mongoose.Schema({
  title: String,
  artist: String,
  path: String,
});

const Item = mongoose.model('Item', itemSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    artist: req.body.artist,
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
