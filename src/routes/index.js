
const { Router } = require('express');

const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Andre",
        "website": "andre.com"
    }

    res.json(data);
});

module.exports = router;