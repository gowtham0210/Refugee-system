const express = require('express');
const signin = require('../Controller/user_login');
//import { signin } from '../Controller/user_login';

const router = express.Router();
router.route("/userlogin").get(signin);



module.exports = router;