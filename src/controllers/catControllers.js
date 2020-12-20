import mongoose from 'mongoose';
import {CatModel} from '../models/catModel';
import {summaryModel} from '../models/summaryModel';

const Cat = mongoose.model('Cat', CatModel);
const Summary = mongoose.model('Summary', summaryModel);

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

const findCatByName = (req, res) => {
    Cat.find({name: req.params.name})
        .then(cat => {
            try {
                res.status(200).json({
                    data: cat,
                    message: `Record of a cat ${req.params.name}`})
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

const updateCatByName = (req, res) => {
    Cat.findOneAndUpdate({name: req.params.name}, req.body, {new: true, useFindAndModify: false})
        .then(cat => {
            try {
                res.status(202).json({
                    data: cat,
                    message: 'Updated!'
                })
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

const deleteCatByName = (req, res) => {
    Cat.deleteOne({name: req.params.name})
        .then(cat => {
            try {
                res.status(204).json({message: 'Successfully deleted a cat'})
                } catch (err) {
            }})
        .catch(err => res.json(err));
}

const addSummary = (req, res) => {

}


export {addNewCat, getAllCats, findCatByName, updateCatByName, deleteCatByName, addSummary};