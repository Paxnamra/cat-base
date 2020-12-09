import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/catRoutes';
import {connectToDb} from './connection';

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Launched server is running on ${PORT}`);
})

routes(app);

mongoose.Promise = global.Promise;
connectToDb().then().catch();

export default app;



