const express = require('express');

const router = express.Router();

router.get('/', (request, response) => response.status(200).send('o router está funcionando!!') );

module.exports = router;