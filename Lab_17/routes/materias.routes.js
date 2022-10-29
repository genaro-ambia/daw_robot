const express = require('express');
const materiasController = require('../controllers/materias.controller');
const router = express.Router();

router.get('/new', materiasController.get_new);

router.post('/new', materiasController.post_new);

router.get('/:ID_materia', materiasController.get_one);

router.get('/', materiasController.get_root);

module.exports = router;