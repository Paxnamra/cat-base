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
        .then(cat => res.json(cat))
        .catch(err => res.status(201).send(err));
}

const getAllCats = (req, res) => {
    Cat.find({})
        .then(cat => {
            try {
                res.status(200).send({data: cat})
                } catch (err) {
            }}).catch(err => res.send(err));
}

const findCatByID = (req, res) => {
    Cat.findById(req.params.catID)
        .then(cat => {
            try {
                res.status(200).send({data: cat})
                } catch (err) {
            }})
        .catch(err => res.send(err));
}

const updateCat = (req, res) => {
    Cat.findOneAndUpdate({_id: req.params.catID}, req.body, {new: true, useFindAndModify: false})
        .then(cat => {
            try {
                res.status(202).send({data: cat})
                } catch (err) {
            }})
        .catch(err => res.send(err));
}

const deleteCat = (req, res) => {
    Cat.remove({_id: req.params.catID})
        .then(cat => {
            try {
                res.status(204).send({message: 'Successfully deleted a cat'})
                } catch (err) {
            }})
        .catch(err => res.send(err));
}

export {addNewCat, getAllCats, findCatByID, updateCat, deleteCat};