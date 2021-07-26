const { Router } = require('express');

const router = Router();

router.route('/status').get((request, response) => {
  return response.status(200).send({
    message: "** 🚀 EnjoyIn! API is running! **"
  });
});

router.use('/auth', require('./auth.routes'));
router.use('/series', require('./serie.routes'));

module.exports = router;