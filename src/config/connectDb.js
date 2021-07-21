const mongoose = require("mongoose");
const { mongodb } = require("./data");

const connectDb = async() => {
    try {
        await mongoose.connect(mongodb.URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Base de datos conectada: Mongodb")
    } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`)
    }
}

module.exports = connectDb;