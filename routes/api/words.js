const express = require('express');
const router = express.Router();

//words Model

const Words = require('../../models/Words');

//@routes GET api/words
//@desc: Add a new word
router.get('/', async (req, res) => {
    try{
        const wordPosts = await Words.find({});
        if(!wordPosts) throw Error('No words were found.') //if wordPosts is false, throw an error.
        res.status(200).json(wordPosts);
    } catch(err) {
        res.status(400).json( {msg: err})
    }
});

// //@routes POST api/words
// //@ Add a word
// router.post('/', async (req, res) => {
//     // res.send('Lets add a new word...');
//     //console.log(req.body);
//     const newWord = new Words(req.body);
//     try {
//         const wordPost = await newWord.save(); //'newPost.save()' will save the inserted object into the mongoDB database as it waits for entered data on a timer
//         if(!wordPost) throw Error('something went wrong when saving the post'); //if 'post' is false, throw an error
//         res.status(200).json(wordPost);
//     } catch(err) {
//         res.status(400).json({ msg: err })
//     }
// });

//@routes POST api/words
//@ Add a word
router.post('/', async (req, res) => {
    // res.send('Lets add a new word...');
    //console.log(req.body);
    const newWord = new Words(req.body);
    try {
        const wordPost = await newWord.save(); //'newPost.save()' will save the inserted object into the mongoDB database as it waits for entered data on a timer
        if(!wordPost) throw Error('something went wrong when saving the post'); //if 'post' is false, throw an error
        res.status(200).json(wordPost);
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

//-- for POST Request

//routes DELETE api/words
// @desc DELETE a word
router.delete('/:id', async (req, res) => {
    try{
        const wordPost = await Words.findByIdAndDelete(req.params.id) //'findByIdAndDelete' is a function of MongoDb or the MongoDB class
        if(!wordPost) throw Error('No such word found.'); //if the word of a specific id cant be found, throw an error 
        res.status(200).json( { success: true })
    } catch(err) {
        res.status(400).json( { msg: err })
    }
});

module.exports = router; //this router can be used inside the server.js file