'use strict'

import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
import Cohort from "../models/cohort.js";

const sqlite = require('sqlite3').verbose();
var db = new DBModel('./db/test.db');
// db.setup();
console.log(db.connection);

// Student.create(db.connection, new Student('Roberto','Firmino', 2));
// let testCreate = `SELECT * FROM Students WHERE firstname = 'Roberto' AND lastname = 'Firmino' AND cohort_id = 2`
// db.connection.each(testCreate,(err,row)=>{
//   if(typeof row == 'object'){
//     console.log(`Test create student : success`);
//   }
// });

// Student.update(db.connection, new Student('Roberto', 'Asalamakete', 2));
// let testUpdate = `SELECT * FROM Students WHERE firstname = 'Roberto' AND lastname = 'Firmino' AND cohort_id = 2`
// db.connection.each(testUpdate,(err,row)=>{
//   if(typeof row == 'object'){
//     console.log(`Test create student : success`);
//   }
// });