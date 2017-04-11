"use strict"

let repl = require('repl');
// const sqlite = require('sqlite3').verbose();

class DBModel {


  static createStudent(query) {
    let sqlite = require('sqlite3').verbose();
    const db = new sqlite.Database('.db/student.db');
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) { console.log(err); }
          else {
            console.log(`berhasil menambah tabel students`);
          }
      });
    }
  )};

  static createCohort(query) {
    let sqlite = require('sqlite3').verbose();
    const db = new sqlite.Database('.db/student.db');
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) { console.log(err); }
          else {
            console.log(`berhasil menambah tabel cohorts`);
          }
      });
    }
  )};

  static createTable() {
    const CREATE_STUDENT = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR NOT NULL, lastname VARCHAR, birthdate DATE );";
    const CREATE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR NOT NULL );";
    
    DBModel.createStudent(CREATE_STUDENT);
    DBModel.createCohort(CREATE_COHORT);
    
  } // end of createTable

  }
  

  
  


export default DBModel
