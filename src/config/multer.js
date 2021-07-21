const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb( null, path.join(__dirname, "../upload" ));
    },
    filename: function(req, file, cb) {
        cb( null, `${file.originalname.split(".")[0]}-${Date.now()}.${file.mimetype.split("/")[1]}` );
    }
});
    
module.exports = storage;