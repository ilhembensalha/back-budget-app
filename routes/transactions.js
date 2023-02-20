const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction')

router.get('/', transactionController.all);
router.get('/:id', transactionController.get);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);
router.get('/somme', transactionController.somme);
module.exports = router;