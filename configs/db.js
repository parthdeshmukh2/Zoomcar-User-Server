// importing mongoose dependencies
const mongoose = require("mongoose");

//running the mongoAtlas/mongoCloud server
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://parthdeshmukh99:ji83O4JSpIAVJWC7@cluster0.grvtf3q.mongodb.net/zoomcar?retryWrites=true&w=majority"
  );
};
