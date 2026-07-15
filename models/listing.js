const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    price: 
    {
        type: Number,
        required: true,
        min: 0
    },

    image: 
    {
        type: String,
        default: 'https://images.pexels.com/photos/20296321/pexels-photo-20296321.jpeg'
    },

    streetAddress: 
    {
        type: String,
        required: true,
    },

    city: 
    {
        type: String,
        required: true
    },

    size: 
    {
        type: number,
        required: true,
        min: 0
    },

    owner: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    

}, { timestamps: true } )

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
