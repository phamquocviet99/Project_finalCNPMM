const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const upload = multer({dest : 'upload/'});

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, '.upload/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter
// });


const productroutes = require("../controllers/product.controllers");

router.get('/', productroutes.findAll);
router.get("/categories/:categoriesId", productroutes.findProductbyCategory);

router.put('/:productId',upload.single('image'),productroutes.update);
router.post('/' ,upload.single('image'), productroutes.create);  
router.get("/:productId", productroutes.findOne);
router.delete("/:productId", productroutes.remove);

  
  module.exports = router;
  