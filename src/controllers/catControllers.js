import mongoose from 'mongoose';
import {CatModel} from '../models/catModels';

const Cat = mongoose.model('Cat', CatModel);

/*
* try-catch block inside "then's" is to silence: UnhandledPromiseRejectionWarning
* it is temporary yet to figure out, better solution seems to be to somehow set node flag --unhandled-rejections=silence
*/

const addNewCat = (req, res) => {
    let newCat = new Cat(req.body);

    newCat.save()
        .then(cat => res.status(201).json(cat))
        .catch(err => res.json(err));
}

const getAllCats = (req, res) => {
    Cat.find({})
        .then(cat => {
            try {
                res.status(200).json({data: cat})
                } catch (err) {
            }}).catch(err => res.json(err));
}

const findCatByID = (req, res) => {
    Cat.findById(req.params.catID)
        .then(cat => {
            try {
                res.status(200).json({data: cat})
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

const updateCat = (req, res) => {
    Cat.findOneAndUpdate({_id: req.params.catID}, req.body, {new: true, useFindAndModify: false})
        .then(cat => {
            try {
                res.status(202).json({data: cat})
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

const deleteCat = (req, res) => {
    Cat.remove({_id: req.params.catID})
        .then(cat => {
            try {
                res.status(204).json({message: 'Successfully deleted a cat'})
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

export {addNewCat, getAllCats, findCatByID, updateCat, deleteCat};