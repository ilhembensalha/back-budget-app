const express = require('express');
const router = express.Router();

const utilisateurController = require('../controllers/utilisateur')

router.get('/', utilisateurController.all);
router.get('/:id', utilisateurController.get);
router.post('/', utilisateurController.create);
router.put('/:id', utilisateurController.update);
router.delete('/:id', utilisateurController.delete);
router.post('/signup', utilisateurController.signup);
router.post('/login', utilisateurController.login);
router.get('/profile/:id', utilisateurController.profile);

module.exports = router;