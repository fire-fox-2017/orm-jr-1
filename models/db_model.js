"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();

class DBModel {
  constructor(file = '.db/students.db') {
    this.file = file;
    this.connection = new sqlite.Database(this.file);
  }

  static createTable() {
    const db = this.connection;
    const CREATE_STUDENT = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT, birthdate DATE );";
    const CREATE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL );";
    
    

  }

}

export default DBModel
