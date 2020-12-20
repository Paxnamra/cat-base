import mongoose from 'mongoose'

const summaryModel = mongoose.Schema({
    cat: {type: mongoose.Schema.Types.ObjectId, ref: 'Cat'},
});

export {summaryModel};