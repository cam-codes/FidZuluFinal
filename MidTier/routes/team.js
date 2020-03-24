var express = require('express');
var router = express.Router();
const got = require('got');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const team = {
    team: 'Middleware C',
    memberNames: [
      'Thomas Tsuchiya',
      'Boris Ho',
      'Rajesh Shahi'
    ]
  };
  res.send(team);
});

module.exports = router;
