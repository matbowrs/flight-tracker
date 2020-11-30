const mongoose = require("mongoose");

// Setup schema
let flightSchema = mongoose.Schema({
    time: {
        type: Date,
        default: Date.now,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    originCountry: String,
    callsign: String,
    heading: Number,
});

// Export Flight model
let Flight = (module.exports = mongoose.model("flight", flightSchema));
module.exports.get = function (callback, limit) {
    Flight.find(callback).limit(limit);
};