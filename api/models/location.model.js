const mongoose = require('mongoose');
const { model } = require('mongoose/lib/mongoose');
const type = require('mongoose/lib/schema/operators/type');

const locationSchema = new mongoose.Schema(
    {
        lat: {
            type: String,
            require: true,
        },
        long: {
            type: String,
            require: true,
        },

    },
    { timestamps: true},
)

module.exports = mongoose.model('location', locationSchema);