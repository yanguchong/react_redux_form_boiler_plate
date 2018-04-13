const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();
const uuidv1 = require('uuid/v1');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World!!!');
});

router.get('/get-message', function(req, res, next) {
	res.send('Hello World!!!');
});

router.post('/async-validate-test', function(req,res, next){
	res.send({"isValid":"true"});
});

router.post('/post-message', function(req, res, next) {

    console.log(req.body);

    const tmp = "./public/tmp/";

	if (!fs.existsSync(tmp)){
		fs.mkdirSync(tmp);
	}

	fs.writeFile(tmp + uuidv1() + ".txt", JSON.stringify(req.body), function(err) {
		console.log("success?");
		console.log(err);

		if(err) {
			return err;
		}

		res.send({"status": "success"});

		console.log("The file was saved!");
	});

});

module.exports = router;
