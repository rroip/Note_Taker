const path = require("path");
const fs = require("fs");

function noteCreator(note, notesArr) {
    notesArr.push(note)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({ notes: notesArr }, null, 2))
    return note
}

module.exports = { noteCreator }