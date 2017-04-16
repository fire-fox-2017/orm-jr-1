// "use strict"
// //Initialize DB
// const sqlite3 = require('sqlite3').verbose();
// var file = 'student.db';
// var db = new sqlite3.Database(./db/student.db);
//
// class DBModel {
//   constructor(){
//     this.CREATE_TABLE_STUDENTS = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, birthdate DATE, cohort_id INTEGER FOREIGN KEY);";
//     this.CREATE_TABLE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, created_at DATE);";
//     this.
//   }
//
//   setup(){
//     db.serialize(function(){
//       //Create Students Table
//       db.run(this.CREATE_TABLE_STUDENTS, function(err){
//         if (err){
//           console.log(err);
//         } else {
//           console.log('CREATE_TABLE_STUDENTS_SUCCESS');
//         }
//       });
//     });
//     //Create Cohort Table
//     db.serialize(function(){
//       //Create TABLE
//       db.run(this.CREATE_TABLE_COHORT, function(err){
//         if (err){
//           console.log(err);
//         } else {
//           console.log('CREATE_TABLE_STUDENTS_COHORT');
//         }
//       });
//     });
//   }
//   }
//
//
// export default DBModel
"use strict"
const repl = require('repl');
const sqlite = require('sqlite3').verbose();
// var db = new sqlite.Database('../db/student.db')

class DBModel {
  constructor(db =new sqlite.Database('./db/student.db')) {
    this.connection=db;
  }

  setup(){
    let db = this.connection

    var CREATE_TABLE = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL UNIQUE, lastname TEXT, id_cohort INTEGER);";
    db.serialize(function() {
        db.run(CREATE_TABLE, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('CREATE TABLE students');
            }
        });
    });
    var CREATE_TABLE = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);";
    db.serialize(function() {
        db.run(CREATE_TABLE, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('CREATE TABLE cohorts');
            }
        });
    });
  }
}

export default DBModel
