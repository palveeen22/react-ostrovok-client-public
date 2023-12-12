const CartController = require("../Controllers/CartController");
const router = require("express").Router();
const { authorize } = require("../Middlewares/Authorization.js");

//get all stores
router.get("/", authorize, CartController.readCart);
router.post("/:id", authorize, CartController.createCart);
// router.get("/:id", authorize, CartController.readCartById);
router.delete("/:id", authorize, CartController.deleteCart);

module.exports = router;
