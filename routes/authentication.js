const authenticationController = require('../controllers/authentication');
const authenticationRouter = require('express').Router();

authenticationRouter.post('/login', authenticationController.login);
authenticationRouter.post('/register', authenticationController.register);
authenticationRouter.post('/admin-login', authenticationController.adminLogin);

module.exports = authenticationRouter;