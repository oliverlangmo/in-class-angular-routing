var express = require('express');
var router = express.Router();

//private variable - not exported
var something = 1;

//public variable - exported
router.get('/cats', function(req,res){
  res.send("meow");
});

module.exports = router;
