const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("항상", req.baseUrl)
    res.json({message:"서버에서 돌려주는 값"});
})

module.exports = router;
