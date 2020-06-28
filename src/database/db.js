//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no bando de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.run(`DELETE FROM places WHERE id != ?`, [4], function(err){
    if(err){
        return console.log(err)
    }
    console.log("--")
})
