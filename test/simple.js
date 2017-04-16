"use strict"
import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
import Cohort from "../models/cohort.js";

var db = new DBModel("./db/test.db")

const sqlite = require('sqlite3').verbose();)

let query = `SELECT * FROM Students WHERE firstname = 'stedy' AND lastname = 'yulius' AND id_cohort = 2`
db.connection.each(query,(row,err)=>{
  if(typeof row == 'object'){
    console.log(`Test create student : sucess`);
  }
})
