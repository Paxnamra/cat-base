import mongoose from 'mongoose'

const SkillModel = mongoose.Schema({
    unusual_abilities: Number,
    special_trait: String,
});

export {SkillModel};