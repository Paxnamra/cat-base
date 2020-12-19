import mongoose from 'mongoose';

const sectionModel = mongoose.Schema({
    section: String,
    description: String
});

export {sectionModel};