import mongoose from 'mongoose'

const skillSchema = mongoose.Schema({
    unusual_abilities: Number,
    special_trait: String,
});

export {skillSchema};