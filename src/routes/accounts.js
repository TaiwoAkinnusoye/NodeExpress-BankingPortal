const express = require('express');
const {_, accounts} = require('../data');

const router = express.Router();

router.get('/savings', (req, res) => {
    res.render('account', {account: accounts.savings})
});

router.get('/credit', (req, res) => {
    res.render('account', {account: accounts.credit})
});

router.get('/checking', (req, res) => {
    res.render('account', {account: accounts.checking})
});

module.exports = router;