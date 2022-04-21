//const express = require('express');
import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello');
});

app.put('/', (req, res) => {
	res.sendFile('./exercise2.html', { root: __dirname });
});

// 	const del = {
// 		good: 'yep',
// 	};
// 	res.send(home);
// });
app.delete('/', (req, res) => {
	res.json({ ' good': 'yep ' });
});

app.set('view engine', 'ejs');
app.get('/test-ejs', (req, res) => {
	res.render('pages/index', { myTitle: 'my First Title' });
});

// import testRouter from './views/test-ejs.js';
// app.use('/test-ejs', testRouter);

app.listen(port, () => console.log(`Hello, Server started on port ${port}`));
