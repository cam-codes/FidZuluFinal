var express = require('express');
var router = express.Router();
const got = require('got');
const url = require('url');

router.get('/raleigh', function(req, res, next) {
  got('http://localhost:3036/laptops/all/raleigh').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

router.get('/durham', function(req, res, next) {
  got('http://localhost:3036/laptops/all/durham').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

router.get('/team', function(req, res, next) {
  got('http://localhost:3036/laptops/team').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

module.exports = router;
