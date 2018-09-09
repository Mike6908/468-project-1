var mongoose = require('mongoose')
var schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city: {
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    }
});

var Locale = module.exports = mongoose.model('Locale',schema);

// get locations from db
/* module.exports.getLocales = function(callback, limit){
    Locale.find(callback).limit(limit);
}
 */