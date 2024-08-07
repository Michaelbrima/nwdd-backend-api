const mongoose = require('mongoose');
const Schema = mongoose.Schema; //"defines the structure and property of the document in the MongoDB collection." (Nakiri.com)

const WordSchema = new Schema({
    word: {
        type: String,
        // required: true,
    },
    partOfSpeech: {
        type: String,
        },
    definition: {
        type: String,
    }
//     ,
//     phonetic: {
//         type: String,
//         // required: true,
//     },
//     phonetics: [
//             {
//             text: {
//                 type: String,
//                 // required: true,
//             },
//             audio: {
//                 type: String,
//                 // required: true,
//             },
//            } 
//         ],
//         // required: true,
    
//     origin: {
//         type: String,
//         // required: true,
//     },
//     meanings: [
//             {
//             partOfSpeech: {
//             type: String,
//             },
//             definitions:  [
//                             {
//                                 definition: {
//                                     type: String,
//                                 },
//                                 example: {
//                                     type: String,
//                                 },
//                                 synonyms: {
//                                     type: [],
//                                 },
//                                 antonyms: {
//                                     type: [],
//                                 }
//                             }
//                           ],
                        
//             }

//                     ],
            },
    
);

module.exports = mongoose.model('Words', WordSchema);