const router = require("express").Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({storage});

const {uploadFile, downloadFile} = require("../controllers/fileController");

router.post('/upload', upload.single("myFile"), uploadFile);
router.get("/download/:file", downloadFile)
module.exports = router;