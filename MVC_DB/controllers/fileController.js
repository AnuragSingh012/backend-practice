const File = require("../models/file");

exports.uploadFile = async (req, res, next) => {
    try {
        const file = new File({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            data: req.file.buffer
        });

        await file.save();
        res.status(201).json({ message: `"File uploaded successfully = ${file.filename}` })
    } catch(err) {
        next(err);
    }
}

exports.downloadFile = async (req, res, next) => {
    try{
        const file = await File.findOne({ filename: req.params.filename });
        if(!file) {
            return res.status(200).json({statusCode: 400, message: "File Not Exists...."})
        }
        res.set({
            'Content-Type: file.contentType',
            'Content-Disposition': `attachment; filename = "${file.filename}"`
        });
        res.send(file.data);
    }catch(err) {
        next(err)
    }
}