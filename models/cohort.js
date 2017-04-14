"use strict"

import Student from "./student.js";

const sqlite = require('sqlite3').verbose();

class Cohort {
  constructor(cohort_name, id = 0){
    this.cohort_name = cohort_name;
    this.id = id;
  }

  static create(connection, objCohort){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query1 = `INSERT INTO cohort (cohort_name) VALUES ('${objCohort.cohort_name}')`;
    db.serialize(function(){
      db.run(query1, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Memasukkan Data Cohort');
        }
      })
    });
  }

  static update(connection, objCohort){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query2 = `UPDATE cohort SET cohort_name = '${objCohort.cohort_name}' where id = '${objCohort.id}'`;
    db.serialize(function(){
      db.run(query2, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Mengedit Data Cohort');
        }
      })
    });
  }

  static delete(connection,id){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query3 = `DELETE FROM cohort WHERE id = '${id}'`;
    db.serialize(function(){
      db.run(query3, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Menghapus Data Cohort');
        }
      })
    });
  }

  static findById(connection,id){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query4 = `SELECT * FROM cohort where id = '${id}'`;
    db.serialize(function(){
      db.each(query4, function(err, row){
        if (err){
          console.log(err);
        } else {
          console.log(JSON.stringify(row));
        }
      })
    });
  }

  static findAll(connection, callback){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query6 = `SELECT * FROM cohort`;
    db.serialize(function(){
      db.all(query6, function(err, rows){
        callback(rows,err)
      });
    });
  }

  static where(connection, string ,callback){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    var string = string.split(' = ');
    let query7 = `SELECT * FROM cohort WHERE ${string[0]} = ${string[1]}`;
    // console.log(string);
    db.serialize(function(){
      db.all(query7, function(err, rows){
        callback(rows,err)
      });
    });
  }

}

export default Cohort

// Cohort.findAll(dbModel.connection,function(data, err) {if(!err) {console.log(data);} else { console.log(err); }})
// Cohort.where(dbModel.connection, "cohort_name = 'Kerja'",  function(data, err) {if(!err) {console.log(data);} else { console.log(err); }})
