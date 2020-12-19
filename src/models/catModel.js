import mongoose from 'mongoose';

const CatModel = mongoose.Schema({
    name: String,
    furType: String,
    colour: String,
    favouritePlace: String,
    created_date: {
        type: Date,
        default: Date.now()
    }
});

export {CatModel};