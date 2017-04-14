"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();
// var db = new sqlite.Database('./db/student.db');

class DBModel {
  constructor(db = new sqlite.Database('./db/student.db')){
    // this.connection = new sqlite.Database('./db/student.db');
    this.connection = db;
  }

setup(){
  this.createStudent();
  this.createCohort();
}

createStudent(){
  let query1 = `CREATE TABLE student (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL UNIQUE, lastname TEXT, id_cohort INTEGER, FOREIGN KEY (id_cohort) REFERENCES cohort(id))`;
  db.serialize(function(){
      db.run(query1, function(err){
        if (err){
          console.log('Table student sudah ada, silakan cek error');
          console.log(err);
        } else {
          console.log('Sukses Buat Table Student');
        }
      })
    });
}

createCohort(){
  let query1 = `CREATE TABLE cohort (id INTEGER PRIMARY KEY AUTOINCREMENT, cohort_name TEXT NOT NULL UNIQUE)`;
  db.serialize(function(){
      db.run(query1, function(err){
        if (err){
          console.log('Table cohort sudah ada, silakan cek error');
          console.log(err);
        } else {
          console.log('Sukses Buat Table Cohort');
        }
      })
    });
}

}

// let dbModel = new DBModel();
// dbModel.show();
export default DBModel
