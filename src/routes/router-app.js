const router = require('express').Router();
const homeController = require('../controllers').home;
const profileController = require('../controllers').profile;
const crudController = require('../controllers').crud;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);
router.get('/crud', verifyUser.isLogin, crudController.crud);

module.exports = router;