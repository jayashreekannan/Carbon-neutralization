const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  addEmission,
  getReport
} = require('../controllers/emissionController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/emission', addEmission);
router.get('/report/:username', getReport);

module.exports = router;
