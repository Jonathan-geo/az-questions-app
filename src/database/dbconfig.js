const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://jonathan:1246583dv7@cluster0.5ueib.mongodb.net/az-questions-app?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})


mongoose.Promise = global.Promise;

module.exports = mongoose;