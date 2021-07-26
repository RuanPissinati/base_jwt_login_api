const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');

const SerieController = require('../controllers/SerieController');

const router = Router();
router.use(authMiddleware);
router.route('/allseries').get(SerieController.getAllSeries);
router.route('/findoneserie/:id').get(SerieController.findOneSerie);
router.route('/register').post(SerieController.register);

module.exports = router;
