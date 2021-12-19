const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("ROOT"));

router.get("/books", controllers.getAllBooks);

router.get("/books/genre/:genre", controllers.getByGenre);

router.get("/books/:id", controllers.getById);

module.exports = router;
