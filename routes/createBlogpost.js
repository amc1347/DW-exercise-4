// create blog post

const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const blogposts = db.collection("blogposts");

const form = `
<form>
    <input type="text" name ="title" placeholder="Title of Post" />
    <input type="text" name ="text" placeholder="Text of Post" />
    <input type="text" name ="author" placeholder="Author" />
    <button type="submit">Submit Post</button>

</form>
    `;

router.get("/", (req, res) => res.send(form));

module.exports = router;