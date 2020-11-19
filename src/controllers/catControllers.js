import mongoose from 'mongoose';
import {CatModel} from '../models/catModels';

const Cat = mongoose.model('Cat', CatModel);

const addNewCat = (req, res) => {
    let newCat = new Cat(req.body);

    newCat.save()
        .then(cat => res.json(cat))
        .catch(err => res.send(err));
}

const getAllCats = (req, res) => {
    Cat.find({})
        .then(cat => res.json(cat))
        //return console.log(cat);)
        .catch(err => res.send(err));
}

const findCatByID = (req, res) => {
    Cat.findById(req.params.catID)
        .then(cat => res.send(cat))
        .catch(err => res.send(err));
}

const updateCat = (req, res) => {
    Cat.findOneAndUpdate({_id: req.params.catID}, req.body, {new: true, useFindAndModify: false})
        .then(cat => res.json(cat))
        .catch(err => res.send(err));
}

const deleteCat = (req, res) => {
    Cat.remove({_id: req.params.catID})
        .then(res.json({message: 'Successfully deleted a cat'}))
        .catch(err => res.send(err));
}

export {addNewCat, getAllCats, findCatByID, updateCat, deleteCat};