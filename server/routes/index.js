const express = require('express');
const router = express.Router();
const db = require('../config/db.js')

router.get('/', (req, res) => {
    db.query(`SELECT * FROM \`like\``, (err, rows, cols) => {
        if (err) throw err
        else {
            for(let i = 0; i < rows.length; i++) {
              console.log(rows[i].cookie_id + ": " + rows[i].content_id)
            }
        }
    })
    console.log("항상", req.baseUrl)
    res.json({message:"서버에서 돌려주는 값"}); // data에 객체로. end와 같음.
})


module.exports = router;
