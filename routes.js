const express = require('express');
const {
    add,
    subtract,
    multiply,
} = require('./utils');

function convertParamsToNumbers(req, res, next) {
    Object.keys(req.params).forEach((k) => {
        req.params[k] = parseInt(req.params[k], 10);
    });
    next();
}

const router = express.Router();

router.get('/add/:n1/:n2', convertParamsToNumbers, (req, res) => {
    const { n1, n2 } = req.params;
    res.json({ answer: add(n1, n2) });
});

router.get('/subtract/:n1/:n2', convertParamsToNumbers, (req, res) => {
    const { n1, n2 } = req.params;
    res.json({ answer: subtract(n1, n2) });
});

router.get('/multiply/:n1/:n2', convertParamsToNumbers, (req, res) => {
    const { n1, n2 } = req.params;
    res.json({ answer: multiply(n1, n2) });
});

router.get('*', (req, res) => res.status(404).send({
    error: 'Unsupported route',
}));

module.exports = router;
