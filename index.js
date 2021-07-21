const express = require("express");
const port = ( process.env.PORT || 4000 );
const cors = require("cors");
const path = require("path")
const connectDb = require("./src/config/connectDb");

// Inicializando
const app = express();
connectDb()

// MIddlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "/src/upload")));

// Routes
app.use("/", require("./src/routes/uploadImage"));

// Server listening
app.listen(port, ()=> {
    try {
        console.log(`Servidor corriendo en el puerto: ${port}`)
    } catch (error) {
        console.log(`Ha ocurrido un error:${error}`)
    }
})