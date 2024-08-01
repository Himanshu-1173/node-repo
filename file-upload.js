const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();

// Ensure 'uploads' directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg');
    }
});

const upload = multer({
    storage: storage
}).single('user_file');

app.post('/upload', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).send('Multer error occurred when uploading.');
        } else if (err) {
            return res.status(500).send('An unknown error occurred when uploading.');
        }
        
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        
        res.send('File uploaded successfully');
        console.log('File uploaded:', req.file);
    });
});

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
