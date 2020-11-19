import {addNewCat, getAllCats, findCatByID, updateCat, deleteCat} from "../controllers/catControllers";

const routes = (app) => {
    app.route('/')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send(`Server is running on 4000`);
        });

    app.route('/catsCatalogue')
        .get(getAllCats);

    app.route('/catsCatalogue/addCat')
        .post(addNewCat);

    app.route('/catsCatalogue/:catID')
        .get(findCatByID)
        .put(updateCat)
        .delete(deleteCat);
}

export default routes;