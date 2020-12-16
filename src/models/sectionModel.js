import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sectionModel = new Schema({
    section: String,
    description: String
});

export {sectionModel};