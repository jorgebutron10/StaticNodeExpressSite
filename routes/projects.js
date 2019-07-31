const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectsData.json');
router.get('/', (req, res) => {
console.log('Sorry, the page does not exist, you will be redirected to the homepage.');
res.redirect('/');
})
router.get('/:id', (req, res) => {
const { id } = req.params;
const project = projects[id];
res.app.locals = project;

// res.app.locals=project;
if (project !== undefined) {
res.render('project');
} else {
 console.log('Sorry, the page does not exist, you will be redirected to the homepage.');
 res.redirect('/')
}
});
module.exports = router;
