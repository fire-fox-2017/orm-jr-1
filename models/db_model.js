"use strict"

// file ini untuk konek ke student db aja.
const repl = require('repl');
const sqlite = require('sqlite3').verbose();

// Query
const CREATE_STUDENT = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(25), lastname VARCHAR(25), birthdate DATE );";
const CREATE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(25) );";


class DBModel {
  constructor(dbfile) {
    this.connection = new sqlite.Database(dbfile);
  }


  setup() {
    let db = this.connection;

    db.serialize(function() {
      db.run(CREATE_STUDENT, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('Table students created');
        }
      });
      db.run(CREATE_COHORT, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('Table cohorts created');
        }
      });
    });
  }

}


export default DBModel
