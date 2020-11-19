import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CatModel = new Schema({
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