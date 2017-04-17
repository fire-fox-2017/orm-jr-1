"use strict"

const sqlite = require('sqlite3').verbose();
//const db = new sqlite.Database(./db/test.db);
const db = new sqlite.Database("./db/student.db");
class DBModel {
  constructor() {
    this.connection = db;
  }

   setup() {
    db. serialize(function(){
      let createStudent = `CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR (100), last_name VARCHAR (100), id_cohort INTEGER (10), foreign key (id_cohort) references cohorts(id));`
      db.run(createStudent, function(err){
        if(!err){
          console.log(`Process Success`);
        }else {
          console.log(`error : ${err}`);
        }
      });
    });
    db. serialize(function(){
      let createCohort = `CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, cohort_name VARCHAR (100);`
      db.run(createStudent, function(err){
        if(!err){
          console.log(`Process Success`);
        }else {
          console.log(`error : ${err}`);
        }
      });
    });
  }

}


export default DBModel
