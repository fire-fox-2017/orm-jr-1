// import DBModel from "../models/db_model.js";
// import Student from "../models/student.js";
//
// var db = new DBModel("./db/test.db")

'use strict'

import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
import Cohort from "../models/cohort.js";

const sqlite = require('sqlite3').verbose();
var db = new DBModel()
// console.log(db.connection);

// Student.create(db.connection, new Student('jumat','pipi',2))
let query = `SELECT * FROM Students WHERE firstname = 'jumat' AND lastname = 'pipi' AND cohort_id = 2`
db.connection.each(query,(err,row)=>{
  if(typeof row == 'object'){
    console.log(`Test create student : sucess`);
  }
})
