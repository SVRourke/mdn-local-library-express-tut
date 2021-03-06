var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, min: 4, max: 100 },
});

GenreSchema.virtual("url").get(function () {
  return "catalog/genres/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);
