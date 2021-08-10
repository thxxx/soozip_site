const express = require('express');
const router = express.Router();
const db = require('../config/db.js')
const cookieParser = require('cookie-parser')
const uuidv4 = require('uuid/v4')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', (req, res) => {
    /*
    db.query(`SELECT * FROM \`like\``, (err, rows, cols) => {
        if (err) throw err
        else {
            for(let i = 0; i < rows.length; i++) {
              console.log(rows[i].cookie_id + ": " + rows[i].content_id)
            }
        }
    })
    */
    //console.log("항상", req.baseUrl)
    res.cookie('cookie_id', uuidv4(), {maxAge: 2629800}) // universally unique identifier to uniquely identify something.
    res.json({message:"generating cookie_id"}); // data에 객체로. end와 같음.
})
router.get('/getGallery', (req, res) => {
    db.query(`SELECT * FROM gallery`, (err, rows, cols) => {
        if (err) throw err
        else {
            console.log("getGallery okay.")
            res.json({items: rows}) // sending rows(array data)
        }
    })
}) // 갤러리 정보 전부 다.

router.post('/uploadGallery', (req, res) => { // VALUES are in req.body except cookie_id
    let contentId = null;
    db.query(`INSERT INTO gallery(cookie_id, content_title, content_desc, category, writer, \`like\`, content_image) 
    VALUES(${req.cookies.cookie_id}, ${req.body.content_title}, ${req.body.content_desc}, ${req.body.category}, ${req.body.writer}, ${req.body.like}, ${req.body.content_image})`, (err, rows, cols) => {
        if (err) throw err
        else {
            console.log("uploadGallery okay.")
            contentId = res.insertId;
        }
    })
    for (let i = 0; i < req.body.hashtag.length; ++i) {
        db.query(`INSERT INTO hashtag(content_id, tag) VALUES(${contentId}, ${req.body.hashtag[i]})`, (err, row, cols) => {
            if (err) throw err
            else {
                console.log('uploadTag okay.')
            }
        })
    } // if hashtag array exists, do operations

    res.json({content_id: contentId})
    // adding hashtag necessary.
}) // 포스트로 글 작성.

router.post('/updateLike', (req, res) => { // update되는 게시글의 id가 body로 전달되어야 함.
    let isEqual = false;
    db.query(`SELECT * FROM \`like\` WHERE content_id = ${req.body.id}`, (err, rows, cols) => {
        if (err) throw err
        else {
            console.log("updateLike 1 okay.")
            for (let i = 0; i < rows.length; ++i) {
                if (rows[i].cookie_id === req.cookies.cookie_id) {
                    isEqual = true; // DO NOT press like button!
                }
            }
        }
    })
    if (!isEqual) {
        db.query(`SELECT * FROM gallery WHERE content_id = ${req.body.id}`, (err, rows, cols) => {
            if (err) throw err
            else {
                let likeNum = rows[0].like
                db.query(`UPDATE gallery SET \`like\` = ${likeNum + 1} WHERE content_id = ${req.body.id}`, (err, rows, cols) => {}) // updating the number of like
            }
        })
        db.query(`INSERT INTO \`like\`(cookie_id, content_id) VALUES(${req.cookies.cookie_id}, ${req.body.id})`, (err, rows, cols) => {
            if (err) throw err
            else {
                console.log("updateLike 2 okay.")
            }
        }) // inserting cookie_id into like table
    }
})

module.exports = router;