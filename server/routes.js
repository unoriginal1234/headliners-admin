let router = require('express').Router();
let model = require('../db/models');

router.get('/card', model.readAll)
router.get('/card/playing', model.readOne)

router.put('/card/:id', model.play)

module.exports = router;