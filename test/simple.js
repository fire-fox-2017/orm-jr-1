import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

const sqlite = require('sqlite3').verbose();
var db = new DBModel("./db/test.db")

let query = `SELECT * FROM test`;
db.connection.each(query, (err, row) => {
  if (typeof row == 'object'){
    console.log('Database Connection is sucess');
  }
})
