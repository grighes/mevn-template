const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('../models/post');
const uri = '';
const localUri = 'mongodb://127.0.0.1:27017/dogfather';

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.listen(process.env.PORT || 8081, () => {
  console.log('Listening on port 8081!');
});

if (process.env.NODE_ENV === 'production') {
  console.warn('@@@ production server @@@');
  mongoose.connect(
    uri,
    { useNewUrlParser: true, uri_decode_auth: true }
  );
} else {
  console.warn('@@@ local connection server @@@');
  mongoose.connect(localUri);
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error:'));

db.once('open', function() {
  return console.warn('db connected!');
});

app.get('/', (req, res) => {
  Post.find({}, function(error, links) {
    if (error) {
      console.error(error);
    }
    res.send({
      links: links
    });
  }).sort({ _id: -1 });
});

app.post('/add', (req, res) => {
  var db = req.db;
  console.warn(req.body.data);
  var links = req.body.data;
  var new_bookmark = new Post({
    data: links
  });

  new_bookmark.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: 'Bookmark saved successfully!'
    });
  });
});

app.put('/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, function(error, post) {
    if (error) {
      console.error(error);
    }
    post.data = req.body.data;
    post.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
});

app.delete('/:id', (req, res) => {
  var db = req.db;
  Post.remove(
    {
      _id: req.params.id
    },
    function(err, post) {
      if (err) res.send(err);
      res.send({
        success: true
      });
    }
  );
});
