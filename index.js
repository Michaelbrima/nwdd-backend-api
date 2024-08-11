//alert('Hey!');


const wordTable = document.getElementById('table');
// let word = document.getElementById('searchBoxInput');
// var word;
var wordInput;
let output = '';

var wordEntry = document.getElementById('searchBoxInput');
var tbody = document.getElementById('tbody');
// const url = 'http://localhost:4000/api/words';
// const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
const link =`https://api.dictionaryapi.dev/api/v2/entries/en`;
var wordListLink = 'https://json-server-2-7lu9.onrender.com/words';
//Get - Read the posts
//Method: GET
// fetch(url)
// fetch(`${link}/${wordEntry.value}`)
// // .then(res => console.log(res)); //this will log the evidence of the response to the console
// .then(res => res.json()) //this will convert the response from json data into readable data
// .then(data => wordToRequest(data)) //this will log the now readable data to the console
// .then(data =>{
//     data.forEach(word => {
//         output += `<tr>
        
//         <td>${word.word}</td>
//         <td>${word.partOfSpeech}</td>
//         <td>${word.definitions}</td>
//         <td><button class="move-row-btn" data-id=${id}>Move</td>
//         <td><button class="delete-row-btn" data-id=${id}>Delete</td>
//         </tr>
// `;
//     });
//     wordTable.innerHTML = output;
// })
tbody.addEventListener('submit', (e) => {
    e.preventDefault();
    wordInput = document.getElementById('searchBoxInput');

    console.log(wordInput)

    fetch(`${link}/${wordEntry}`, {
        // fetch(`${localhostWords}/${wordID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
            })
})
document.addEventListener('DOMContentLoaded', function() {     //Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
    loadHTMLTable([]);
});

//for words entered into the searchbox:
function readInsertedHTML(event) {
    event.preventDefault(); //prevents page from being reloaded
    wordInput = document.getElementById('searchBoxInput');
    //wordInput.addEventListener('click', function (e) {
        console.log(wordInput.value);


    //}
//)

// fetch('http://localhost:4000/api/words', {
//     // fetch(`${localhostWords}/${wordID}`, {
//         // mode: 'no-cors',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({}),
//         })

};


        
 

// function actualReadInsertedHTML(event) {
// event.preventDefault(); //If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
// var actualWordInput = document.getElementById('word-value');
// console.log(actualWordInput.value);
// };

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', wordToRequest)

// for sending entered words to fetch request:
async function wordToRequest() {
     wordInput = document.getElementById('searchBoxInput');
     const table = document.getElementById('tbody');
     const preTable = document.getElementById('preTable');
    // if(wordInput =! null){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en`;
    const response = await fetch(`${url}/${wordInput.value}`)
    const data = await response.json()
        // var j = 0;
        data.forEach(data => {
            // for(let j = 0; j < table.length; j++) {
            let id = 0;
            let i = 0;
            // let j = Math.random().toString(36);
            output += `
            <tr>
        <td id='wordCell'>${data.word}</td>
        <td>${data.meanings[i].partOfSpeech}</td>
        <td>${data.meanings[i].definitions[i].definition}</td>
        <td><button class="save-row-btn" id="saveButton" data-id=${data.id}>Save</td>
        <td><button class="move-row-btn" id="moveButton" data-id=${data.id}>Move</td>
        <td><button class="delete-row-btn" id="deleteButton" data-id=${data.id}>Delete</td>
        </tr>
            `;
            i++;
        
        }) // <= original closing bracket
    // )

    preTable.innerHTML = output;

};

 
async function loadHTMLTable(data) {
    //const table = document.querySelector('table tbody');
    const table = document.getElementById('tbody');

    let tableHtml = "";
    if(data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='6' align=center>No Data</td></tr>";
    }

//     if(data.length !== 0) {
//     const response = await fetch(wordListLink)
//     const enteredData = await response.json()
//         // var j = 0;
//         enteredData.forEach(enteredData => {
//             // for(let j = 0; j < table.length; j++) {
//             let id = 0;
//             let i = 0;
//             // let j = Math.random().toString(36);
//             output += `
//             <tr>
//         <td id='wordCell'>${enteredData.word}</td>
//         <td>${enteredData.meanings[i].partOfSpeech}</td>
//         <td>${enteredData.meanings[i].definitions[i].definition}</td>
//         <td><button class="save-row-btn" id="saveButton" data-id=${enteredData.id}>Save</td>
//         <td><button class="move-row-btn" id="moveButton" data-id=${enteredData.id}>Move</td>
//         <td><button class="delete-row-btn" id="deleteButton" data-id=${enteredData.id}>Delete</td>
//         </tr>
//             `;
//             i++;
        
//         })
//         table.innerHTML = output;
    
// }
}


//function for identifying id

// For loading the word list (GET Request):
table.onload = function() {
    fetch(wordListLink
    //     , {
    //     body: JSON.stringify({
    //         word: wordID,
    //         partOfSpeech: partOfSpeechID,
    //         definition: definitionID
    //     })
    // }
)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
// console.log(test.words.find({
//     word,
//     partOfSpeech,
//     definition
// }))
// const response = fetch(wordListLink)
//     const data = response.json()
//         // var j = 0;
//         data.forEach(data => {
//             // for(let j = 0; j < table.length; j++) {
//             let id = 0;
//             let i = 0;
//             // let j = Math.random().toString(36);
//             output += `
//             <tr>
//         <td id='wordCell'>${data.word}</td>
//         <td>${data.meanings[i].partOfSpeech}</td>
//         <td>${data.meanings[i].definitions[i].definition}</td>
//         <td><button class="save-row-btn" id="saveButton" data-id=${data.id}>Save</td>
//         <td><button class="move-row-btn" id="moveButton" data-id=${data.id}>Move</td>
//         <td><button class="delete-row-btn" id="deleteButton" data-id=${data.id}>Delete</td>
//         </tr>
//             `;
//             i++;
        
//         })
//         table.innerHTML = output;
};


// For retrieving the saved words when the webpage is first loaded (GET Request):
fetch(wordListLink)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    let rows = "";
    data.forEach((Object) => {
        // let id = Object._id;

        let headers = `
          <tr>
            <th>IDs</th>
            <th>Word</th>
            <th>Part of Speech</th>
            <th>Definitions</th>
            <th>Save</th>
            <th>Move</th>
            <th>Delete</th>
          </tr>`;
          document.getElementById('thead').innerHTML = headers;

        rows += `
        <tr>
            <td>${Object._id}</td>
            <td>${Object.word}</td>
            <td>${Object.partOfSpeech}</td>
            <td>${Object.definition}</td>
            <td><button class="move-row-btn" id="moveButton" data-id=${data.id}>Move</td>
            <td><button class="delete-row-btn" id="deleteButton" data-id=${data.id}>Delete</td>
        </tr>
        `;
    });
    table.innerHTML = rows;
    // console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// async function apiToWebpage() {
//     wordInput = document.getElementById('searchBoxInput');
//     const table = document.getElementById('tbody');
//    // if(wordInput =! null){
//        let url = `https://api.dictionaryapi.dev/api/v2/entries/en`;
//    const response = await fetch(wordListLink)
//    const edata = await response.json()
//        // var j = 0;
//        edata.forEach(edata => {
//            // for(let j = 0; j < table.length; j++) {
//            let id = 0;
//            let i = 0;
//            // let j = Math.random().toString(36);
//            output += `
//            <tr>
//        <td id='wordCell'>${edata.word}</td>
//        <td>${edata.meanings[i].partOfSpeech}</td>
//        <td>${edata.meanings[i].definitions[i].definition}</td>
//        <td><button class="save-row-btn" id="saveButton" data-id=${edata.id}>Save</td>
//        <td><button class="move-row-btn" id="moveButton" data-id=${edataata.id}>Move</td>
//        <td><button class="delete-row-btn" id="deleteButton" data-id=${edata.id}>Delete</td>
//        </tr>
//            `;
//            console.log(edata);
//            i++;
       
//        }) // <= original closing bracket
//    // )

//        table.innerHTML = output;

// };

preTable.addEventListener('click', (e) => {
    // console.log(e.target.id);
    e.preventDefault();
    let saveButtonPressed = e.target.id == 'saveButton';
    let moveButtonPressed = e.target.id == 'moveButton';
    let delButtonPressed = e.target.id == 'deleteButton';
    var wordID;
    var partOfSpeechID;
    var definitionID;
    // console.log(e.target.parentElement.parentElement)
    wordRow = e.target.parentElement.dataset.word; //get the colum title for 'word' from MongoDB


    // For saving a word (POST Request):
    if(saveButtonPressed) {
         wordID = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
         partOfSpeechID = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
         definitionID = e.target.parentElement.previousElementSibling.innerHTML;
// const wordObject = {id, word, partOfSpeech, definition}
// const wordObject

         fetch(wordListLink, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word: wordID,
                partOfSpeech: partOfSpeechID,
                definition: definitionID
            })
            
          })
          
        console.log('The word, its Part of Speech, and its Definition were successfully saved.');
    }

    
});

table.addEventListener('click', (e) => {
    // console.log(e.target.id);
    e.preventDefault();
    let saveButtonPressed = e.target.id == 'saveButton';
    let moveButtonPressed = e.target.id == 'moveButton';
    let delButtonPressed = e.target.id == 'deleteButton';
    var wordID;
    var partOfSpeechID;
    var definitionID;
    // console.log(e.target.parentElement.parentElement)
    wordRow = e.target.parentElement.dataset.word; //get the colum title for 'word' from MongoDB


    // For saving a word (POST Request):
    if(saveButtonPressed) {
         wordID = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
         partOfSpeechID = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
         definitionID = e.target.parentElement.previousElementSibling.innerHTML;
// const wordObject = {id, word, partOfSpeech, definition}
// const wordObject

         fetch(wordListLink, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word: wordID,
                partOfSpeech: partOfSpeechID,
                definition: definitionID
            })
            
          }).then(res => res.json())
          .then(() => location.reload())
        //   let message = 'The word, its Part of Speech, and its Definition were successfully saved.';
        // window.location.reload();
        console.log('The word, its Part of Speech, and its Definition were successfully saved.');
        // return message;
    }


    //// For deleting a word (DELETE Request):
    if(delButtonPressed) {
        let pageURL = 'http://127.0.0.1:5500/New%20Word%20Dictionary%20Database.html';
        let id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        wordID = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        // let posID = e.target.parentElement.data.partOfSpeech;
        
        // if(word = wordID){
            // id = id;
        fetch(wordListLink + "/" + id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => location.reload()) //using location.reload() to reload the page
        
        console.log('The word, its Parts Of Speech, and its definitions were successfully deleted.');
        
        // console.log(id);
        
        // }
        
    }
    
});

let enteredWord = document.getElementById('searchBoxInput');
