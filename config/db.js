import"dotenv/config"; //allows us to get environment variable names from '.env' file
import mysql from "mysql2";
import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import { arrayBuffer } from "node:stream/consumers";

//const mysql = require('mysql');
// const dotenv = require('dotenv');
// dotenv.config();

class dbService {
  static getdbServiceInstance() {
    return instance ? instance : new dbService();
  }
}

const db = mysql.createConnection({
    //environment variables needed for connecting to database:
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
}).promise(); //promise method needed in order to use async and away syntax

// export default db;

// Mock database
// const users = [
//     {
//       "first_name": "John",
//       "last_name": "Doe",
//       "email": "johndoe@example.com",
//       "id": "e584d806-a42d-42e6-b671-395a009508be"
//     },
//     {
//       "first_name": "Alice",
//       "last_name": "Smith",
//       "email": "alicesmith@example.com",
//       "id": "734a9e75-b3f5-415f-82fb-79b4fdf1a593"
//     },
//   ];

  //Getting the list of users from the mock database
  //(this is where you would set up the code to put the word values into the table)
  //basically the webpage when initially loaded
  // router.get('/', (req, res) => {
  //   res.send(users);
  // })

  //for getting a specific user back from the mock database based on their id
  // router.get('/:id', (req, res) => {
  //   const { id } = req.params;

  //   const foundUser = users.find((user) => user.id === id)

  //   res.send(foundUser);
  // })

async function getAllData() {
  try {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM wordtable;"; 
    
      connection.query(query, (err, results) => {
        if (err) reject(new Error(err.message));
        resolve(results);
    })
    
    });

      return response;

    } catch(err) {
      console.log(err);
  }
}
  
  //for when if a user sends a request to the backend
  // router.post('/', (req, res) => {
  //   const user = req.body;

  //   users.push({...user, id: uuidv4() });

  //   res.send(`${user.first_name} has been added to the database`);
  // })

  async function postNewWord(word) {
    try {
    const definitions = [];
    const insertId = await new Promise((resolve, reject) => {
      const query = "INSERT INTO wordtable (word, partOfSpeech, definitions) VALUES (?, ?, ?);";
      connection.query((query), [word, partOfSpeech, definitions] , (err, result) => {
        if (err) reject (new Error(err.message));
        resolve(result.insertId);
        })
      });
      return {
        id : insertId,
        word : word,
        partOfSpeech : partOfSpeech,
        definitions : definitions
      };
    } catch (error) {
      console.log(error);  
    }
  }

//   router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     users.filter((user) => user.id !== id) //the id of the entry in question becomes no longer recognized
//     res.send(`${id} deleted successfully from database`)
// })

async function deleteWord(id) {
  id = parseInt(id, 10);
  const response = await new Promise(() => {
    const query = "DELETE FROM wordtable WHERE id = ?;";
    connection.query(query, [id])
  });
}

//module.exports = dbService;

export default db;
//for updating entrys
// router.patch('/:id', (req, res) => {
//   const { id } = req.params;

//   const { first_name, last_name, email } = req.body;

//   const user = users.find((user) => user.id === id);

//   if (first_name) user.first_name = first_name;
//   if (last_name) user.last_name = last_name;
//   if (email) user.email = email;

//   res.send(`User with the ${id} has been updated`)
// })

  // export default router;