const router = require('express').Router();
const mainController = require('./controllers/mainController');

router.get('/' , mainController.homePage);
router.get('/pokemon/:id' , mainController.pokemonPage);

router.get('/types' , mainController.typesPage);
router.get('/types/:type' , mainController.pokemonsByTypePage);

router.get('/search' , mainController.pokemonsByNamePage);


module.exports = router;