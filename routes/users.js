var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    "user": {
      "id": "test",
      "password": "1234"
    }
  });
});

module.exports = router;
