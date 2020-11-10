const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
    apiKey: "AIzaSyDx7R3EQlZbLkbbhZxnfW_Un018-yhiqsE",
    authDomain: "dw-exercise-4.firebaseapp.com",
    databaseURL: "https://dw-exercise-4.firebaseio.com",
    projectId: "dw-exercise-4",
    storageBucket: "dw-exercise-4.appspot.com",
    messagingSenderId: "891593475331",
    appId: "1:891593475331:web:a8a8b805200eed71451536"
  };

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");


app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);


app.listen(port, () =>
    console.log(`Exercise Four is running at localhost:${port}`)
);