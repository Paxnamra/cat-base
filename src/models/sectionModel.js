import mongoose from 'mongoose';

const SectionModel = mongoose.Schema({
    section: String,
    description: String
});

export {SectionModel};