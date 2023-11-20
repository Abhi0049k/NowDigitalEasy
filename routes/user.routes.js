const { Router } = require("express");
const { allUser, specificUser, creatingUser, deletingUser, updatingUser } = require("../controllers/user.controllers");

const userRouter = Router();

// Fetching Details of all users 
userRouter.get('/users', allUser);

// Fetching Details of a Specific User using User._id
userRouter.get('/users/:id', specificUser);

// Creating New User
userRouter.post('/users', creatingUser);

// Deleting User Details with the help of User._id
userRouter.delete('/users/:id', deletingUser);

// Updating User Details with the help of User._id
userRouter.put('/users/:id', updatingUser);

module.exports = userRouter;