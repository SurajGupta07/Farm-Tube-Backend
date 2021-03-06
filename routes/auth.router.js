const { Router } = require('express');
const authController = require("../controllers/auth-controller");

const router = Router();
let { signup_get, signup_post, login_get, login_post, logout_get } = authController;

router.get('/signup', signup_get);
router.post('/signup/new', signup_post);
router.get('/login', login_get);
router.post('/login', login_post);

module.exports = router;