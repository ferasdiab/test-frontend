const mongoose = require ("mongoose")

const reservationModel = new mongoose.Schema({
    user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
    decoration: {type:mongoose.Schema.ObjectId, ref:"decorationModel"},
    date: {type: String}
});

module.exports = mongoose.model("reservationModel", reservationModel)