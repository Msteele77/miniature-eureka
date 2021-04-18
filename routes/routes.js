const fs = require("fs");

var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {

 

  app.get("api/notes", (req, res) => {

    res.json(data);

  });

  app.get("api/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);
    //console.log(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(data),  function(err) {
      if (err) throw (err);        
  }); 

  res.json(data);    

})
}
