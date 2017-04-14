"use strict"

import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
import Cohort from "../models/cohort.js";

const sqlite = require('sqlite3').verbose();
var file = '../db/test.db';
const db = new sqlite.Database(file);

let db1 = new DBModel();
console.log(db1);
// console.log(db.filename);

// Student.create(db.conection, new Student('Ilham','H',1));
// db.connection.serialize(function(){
//   let CARI_NAMA = `SELECT * FROM student WHERE firstname ='ilham' AND lastname = 'H' AND id_cohort=1`;
//   db.conection.all(CARI_NAMA, function(err, rows){
//     if(err){
//       console.log(err);
//     } else {
//       if (rows.length > 0) {
//         console.log('Data ditemukan');
//       } else {
//         console.log('Data tidak ditemukan');
//       }
//     }
//   })
// })
