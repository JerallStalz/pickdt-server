// Importaciones
const router = require("express").Router();
const Image = require("../models/Image");
const storage = require("../config/multer");
const multer = require("multer");
const { server } = require("../config/data");

//Configuracion
const uploader = multer({storage});

router.post("/upload", uploader.single("file"), async (req, res) => {
    const { file, body } = req;
    console.log(req.file);
    if( file && body ) {
        const newImage = new Image({
            fileName: file.filename,
            content: req.body.content,
            urlFile: `http://${server.URL}/${file.filename}`
        });
        await newImage.save();
        res.send({
            newImage: newImage
        });
    };
});

router.get("/download", async ( req, res ) => {
    const images = await Image.find();
    res.json(images);
});

module.exports = router;