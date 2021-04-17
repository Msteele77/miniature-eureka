const fs = require("fs");

module.exports = function (app) {

 

  app.get("api/notes", function (req, res) {

    res.json(data);

  });

  app.get("api/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
  });


  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });


  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });





  app.post("/notes", (req, res) => {
    const newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);
    //console.log(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    if (err) throw (err);
  
    res.json(notes);
  });
  
  //delete notes
}