import express from 'express';

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

export default router;
