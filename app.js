// Create express app
const express = require('express');
const app = express();
// Set Pug
app.set('view engine', 'pug');
// Serve static Files in the public folder
app.use('/static', express.static('public'));
// Create Router path
const indexRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');
app.use(indexRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectRoutes);
// Error Handlers
app.use((req, res, next) => {
    const err = new Error('Sorry! Page is not found.');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(err + '')
    res.render('error');
})
app.listen(3001, () => {
    console.log('The application is running on localhost:3001!');
});
