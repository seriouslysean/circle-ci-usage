const express = require('express');
const { addition, subtraction } = require('./utils');

const router = express.Router();

router.get('/addition/:n1/:n2', (req, res) => {
    const { n1, n2 } = req.params;
    res.json({ answer: addition(n1, n2) });
});

router.get('/subtraction/:n1/:n2', (req, res) => {
    const { n1, n2 } = req.params;
    res.json({ answer: subtraction(n1, n2) });
});

router.get('*', (req, res) => res.status(404).send({
    error: 'Unsupported route',
}));

module.exports = router;
