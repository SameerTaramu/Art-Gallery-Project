const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

router.delete("/:id", deleteUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
module.exports = router;
