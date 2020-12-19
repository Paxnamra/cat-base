import mongoose from 'mongoose'

const summarySchema = mongoose.Schema({
    cat: {type: mongoose.Schema.Types.ObjectId, ref: 'Cat'},
});

export {summarySchema};