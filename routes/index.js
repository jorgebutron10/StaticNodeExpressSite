const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectsData.json');

//render the homepage
router.get('/', (req, res) => {
    res.render('index', {projects: projects });
});
router.get('/about', (req, res) => {
    res.render('about');
});
module.exports = router;
