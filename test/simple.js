"use strict"

import DBModel from "../models/db_model.js";
import Cohort from "../models/cohort.js";
import Student from "../models/student.js";

const repl = require('repl');

function create(db, objkStudent){
    let INSERT_STUDENT = `INSERT INTO student(firstname, lastname, id_cohort) VALUES('${objkStudent._firstName}', '${objkStudent._lastName}', ${objkStudent._cohortId})`
    db.serialize(function(){
      db.run(INSERT_STUDENT, function(err){
        if(err){
          console.log(err);
        }
        else{
          let lastId = this.lastID;
          console.log("SUKSES INPUT DATA");
          db.each(`SELECT firstname,lastname,id_cohort FROM student WHERE id = ${lastId}`, function(err, data){
            if(err){
              console.log(err);
            }
            let dataBase = JSON.stringify(data)
            let dataAwal = JSON.stringify(objkStudent)
            console.log('Database ', dataBase)
            console.log('Data Awal ',dataAwal);
          })

        }
      });
    });
}

function update(db, objkStudent){
    let UPDATE_STUDENT = `UPDATE student SET firstname='${objkStudent._firstName}', lastname='${objkStudent._lastName}', id_cohort=${objkStudent._cohortId} WHERE id=${objkStudent._findId}`
      db.run(UPDATE_STUDENT, function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log("SUKSES UPDATE STUDENT");
          db.each(`SELECT firstname,lastname,id_cohort FROM student WHERE id = ${objkStudent._findId}`, function(err, data){
            if(err){
              console.log(err);
            }
            let dataBase = JSON.stringify(data)
            let dataAwal = JSON.stringify(objkStudent)
            console.log('Database ', dataBase)
            console.log('Data Awal ',dataAwal);
          })
        }
    });
}


let start = repl.start("> ")
start.context.dbModel = new DBModel()
start.context.Student = Student
start.context.Cohort = Cohort
start.context.create = create
start.context.update = update

