const fs = require('fs');
const notes = require('../db/db.json');

async function loadNanoId() {
    const { default: createNanoId } = await import('nanoid/non-secure');
    return createNanoId;
  }
  
  const nanoid = loadNanoId();
  


const addNote = (note) => {
    note.id = nanoid();     // Add unique ID to note
    newArr = (notes) ? newArr = notes : newArr = [];    // Create note array   
    newArr.push(note);     // Add new note to array
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {    // Create a new database file with array
        if (err) throw err;
        console.log('Note has been added!');
    });
    return;
};

const deleteNote = (note) => {
    for (let i = 0; i < notes.length; i++) {    // Loop through notes array
        if (notes[i].id === note.id) {      // When target note matches ID in array...
            notes.splice(i, 1);     // ...delete that note
            console.log('Note has been deleted!')
        }
    };
    return;
};

module.exports = { addNote, deleteNote }