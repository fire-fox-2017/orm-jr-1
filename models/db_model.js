"use strict"



class DBModel {
  constructor () {
    const sqlite = require('sqlite3').verbose();
    // this.filename = './db/student.db';
    this.connection = new sqlite.Database('./db/student.db');
  }

  setup() {
    // create table student
    let create_table_student_str = `CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(100) NOT NULL )`;

    let db = this.connection;
    db.serialize(function () {
      db.run(create_table_student_str, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('Created TABLE Students Successfully.');
        }
      });
    });


    // create table cohort
  }


}

export default DBModel
