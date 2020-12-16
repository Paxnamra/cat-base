import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    unusual_abilities: Number,
    special_trait: String,
});

export {skillSchema};