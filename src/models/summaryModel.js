import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const summarySchema = new Schema({
    cat: {type: mongoose.Schema.Types.ObjectId, ref: 'Cat'},
});

export {summarySchema};