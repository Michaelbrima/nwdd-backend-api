const express = require('express'); //use 'express', a node application used to "...to build a single page, multipage, and hybrid web application." (simplilearn.com/)
// Database Password: qv1euyG77eQxiAbN
const app = express();
const cors = require("cors");
require('dotenv').config()
//BodyParser Middleware (to avoiid 'undefined' being the message sent to console)
app.use(express.json());

const PORT = process.env.PORT || 4000; //Connection port is port 4000

const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//Routes
const wordsRoutes = require("./routes/api/words");

//Connect to MongoDB:
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB database connected'))
    .catch(err => console.log(err));

//User routes
app.use('/api/words', cors(), wordsRoutes); //upon going to 'http://localhost:4000/api/words', the wordsRoutes function will be fired, thus taking the user to the Posts.js file, where multiple api functions can be fired in different scenarios

// For Cors Requests:

//Enable all requests:
app.use(cors());


app.use(
    cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type'],
})
);

app.use(express.json(
    // { limit: "50mb"}
));

//app.use(express.urlencoded({ extended: true }));

app.use("/openai", cors(), wordsRoutes)

app.get('/welcome', cors(), (req, res) => {
    res.status(200).send("Welcome to FreeCodeCamp!!!");
});


app.get('/', cors(), (req, res) => {
    res.send('Connection established in node.');
});

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));

