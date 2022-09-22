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




app.listen(PORT, () => {console.log(`Server is running now on http://localhost:${PORT}`)});