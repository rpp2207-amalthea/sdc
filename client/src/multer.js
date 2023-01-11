const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
})

// file validation

var fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    // prevent to upload

    cb({
      message: 'Unsupported file format'}, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024*1024
  },
  fileFilter: fileFilter
});

module.exports = upload;