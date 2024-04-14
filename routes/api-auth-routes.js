const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middlewares");

const { getUsers, signUp, signIn } = require("../controllers/api-auth-controller");


router.get("/api/getAllUsers", getUsers);

router.post(
  "/api/sign-up",
  verifySignUp.checkDuplicateUsernameOrEmail,
  signUp
);

router.post("/api/sign-in", signIn);

module.exports = router;