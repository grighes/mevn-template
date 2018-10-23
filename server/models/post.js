var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  data: Array
});

var Post = mongoose.model('Data', DataSchema);
module.exports = Post;
