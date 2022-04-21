import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.render('test-ejs', { myTitle: 'my First Title' });
});

export default router;
