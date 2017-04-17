"use strict"

import Student from "./student.js";
const repl = require('repl');
const sqlite = require('sqlite3').verbose();
//const replWords = repl.start({promt: '> '});
const db = new sqlite.Database('./db/student.db');


class Cohort {
  constructor() {
  }

  showAll(){
    let showAll = 'SELECT * FROM cohort;';
    db.serialize(function(){
      db.run(showAll, function(err){
        if(!err){
          console.log('process sucess');
        }else {
          console.log('Error : '+err.message);
        }
      });
    });
  }

  addData(cohortname, cretedAt){
    let addData = `INSERT INTO cohort (cohort_name, created_at) VALUES (${cohortName}, ${createdAt});`
    db.serialize(function(){
      db.run(addData, function(err){
        if(!err){
          console.log('process sucess')
        } else{
          console.log('Error : '+err.message)
        }
      })
    })
  }

}

export default Cohort
