const userController = require('../controllers/users');

const userRouter = require('express').Router();

userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id", userController.getOneUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.post("/reset-password", userController.resetPassword);

module.exports = userRouter;