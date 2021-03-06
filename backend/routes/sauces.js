const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const saucesCtrl = require('../controllers/sauces');
const multer = require('../middleware/multer-config'); 
const authorization = require('../middleware/authorization');


router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.post('/', auth, multer, saucesCtrl.createSauce);  
router.put('/:id', auth, authorization, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, authorization, saucesCtrl.deleteSauce)
router.post('/:id/like', auth, saucesCtrl.likeSauce)


module.exports = router; 