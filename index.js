const express = require("express");
const api = require("./routes/api");
const html = require("./routes/html");
const app = express();
const fs = require("fs");


const PORT = process.env.PORT || 3006

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", api);
app.use("/", html);

// app.delete("/api/notes/:id", function(req, res) {
//     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     let noteID = req.params.id;
//     let newID = 0;
//     console.log(`Deleting note with ID ${noteID}`);
//     savedNotes = savedNotes.filter(newNote => {
//         return newNote.id != noteID;
//     })
    
//     for (newNote of savedNotes) {
//         newNote.id = newID.toString();
//         newID++;
//     }

//     fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//     res.json(savedNotes);
// })


app.listen(PORT, () => {console.log(`Server is running now on http://localhost:${PORT}`)});