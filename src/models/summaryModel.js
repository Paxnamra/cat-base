import mongoose from 'mongoose'

const SummaryModel = mongoose.Schema({
    cat: {type: mongoose.Schema.Types.ObjectId, ref: 'Cat'},
});

export {SummaryModel};