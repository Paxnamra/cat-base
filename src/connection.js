import mongoose from "mongoose";

const uri = "mongodb+srv://Cattatonic:kitkat@catscollective.xirkh.mongodb.net/CatCol";

const connectToDb = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then().catch();
}

export {connectToDb};