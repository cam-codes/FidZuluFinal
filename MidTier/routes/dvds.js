var express = require('express');
var router = express.Router();
const got = require('got');
const url = require('url');

router.get('/all/Raleigh', function(req, res, next) {
  got('http://localhost:3035/dvds/all/raleigh').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

router.get('/all/Durham', function(req, res, next) {
  got('http://localhost:3035/dvds/all/durham').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

router.get('/team', function(req, res, next) {
  got('http://localhost:3035/dvds/team').then(result => {
    res.send(result.body);
  }).catch(error => {
    res.status(500).send('Server is not up!');
  });
});

module.exports = router;
