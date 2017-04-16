// "use strict"
//
// var repl = require ('repl');
// var sqlite = require ('sqlite3').verbose();
//
// var file = './db/student.db';
// var db = new sqlite.Database(file);
// const replServer = repl.start({prompt : '>'})
//
// class DBModel {
//   constructor () {
//     this.connection = db;
//   }
//   help() {
//     console.log('**********************************************');
//     console.log('1. dbModel.setup() ----------------- Create Tabel Student ');
//     console.log('2. dbModel.update() ----------------- Update Student');
//     console.log('**********************************************');
//
//   }
//
//   setup () {
//     let createTableStudent = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, birtdate DATE )";
//
//       // Run SQL one at a time
//       db.serialize (function() {
//         //Create table
//         db.run(createTableStudent, function(err) {
//           if (!err) {
//             console.log('insert table student sukses');
//           }else {
//             console.log(err);
//           };
//         });
//       });
//
//     let createTableCohort = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, birtdate DATE )";
//       // Run SQL one at a time
//       db.serialize (function() {
//         //Create table
//         db.run(createTableCohort, function(err) {
//           if (!err) {
//             console.log('insert table cohort sukses');
//           }else {
//             console.log(err);
//           };
//         });
//       });
//
//   }
//
// }
// // replServer.context.dbModel = setup;;
// // replServer.context.createTableCohort = createTableCohort;
// // dbModel
// // DBModel {
// // connection : Database {open : true, filename : './db/students.db', mode: 65542} }
// //
// // dbModel.setup()
// // Create table student succes.
// // Create table cohort succes.
//
// let dbModel = new DBModel();
// replServer.context.dbModel = dbModel;
// replServer.context.help = dbModel.help;
// // replServer.context.Student = Student;
//
//
// // export default DBModel


"use strict"

const sqlite = require('sqlite3').verbose();
// const file = './db/student.db';
const file = './db/test.db';
// const repl = require('repl');

const db = new sqlite.Database(file)


class DBModel {
  constructor() {
    this.connection = db
  }
  setup(){
    db.serialize(()=>{
      let query = `CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, cohort_id INTEGER, foreign key (cohort_id) references cohorts(id));`
      db.run(query, (err)=>{
        if(err){
          console.log(err);
        } else {
          console.log(`Create Table student Sucess`);
        }
      })
    })
    db.serialize(()=>{
      let query = `CREATE TABLE IF NOT EXISTS Cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);`
      db.run(query, (err)=>{
        if(err){
          console.log(err);
        } else {
          console.log(`Create Table Cohorts Sucess`);
        }
      })
    })
  }
}

export default DBModel
