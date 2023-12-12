const router = require("express").Router();
const CustomerController = require("../Controllers/CustomerController");
const Cart = require("../Routes/CartRouter.js");
const ProductController = require("../Controllers/ProductController");
const { authentication } = require("../Middlewares/Authentication.js");

router.get("/categories-products", ProductController.getCategory);
router.get("/products-public", ProductController.getAllProducts);
router.get("/products-public/:id", ProductController.getProductById);

router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);

router.use(authentication);

router.use("/my-cart", Cart);

// router.use("/songs", songs);

module.exports = router;
