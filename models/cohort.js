"use strict"
import Student from "./student.js";

// const repl = require("repl");
// const sqlite = require("sqlite3").verbose();
// const replServer = repl.start('>  ');
// 
// var file = "db/student.db"
// var db = new sqlite.Database(file);

class Cohort {
    constructor(db){
      this.connection = db
    }



    addData(cohort,created_at,id_cohort){
      let addData = `INSERT INTO cohort (cohort_name, created_at) VALUES (${cohort}), ${created_at}, ${id_cohort})`;
      db.serialize(function(){
        db.run(addData, function(err){
            if(err){
              console.log(err)
            }
            else {
              console.log("Add Success!")
            }
        })
      })
    }

    updateData(cohort,created_at,id){
      let updateData = `UPDATE cohort set cohort_name = ${cohort}, created_at = ${created_at} WHERE id = ${id}`
        db.serialize(function(){
          db.run(updateData, function(err){
            if(err){
              console.log(err)
            }
            else {
              console.log("Update Success!")
            }
          })
        })
    }

    deleteData(id){
      let deleteData = `DELETE from cohort WHERE id = ${id}`
        db.serialize(function(){
            db.run(deleteData, function(err){
              if(err){
                console.log(err)
              }
              else {
                console.log("Delete Success")
              }
            })
        })
    }


    listData(){
      let listData = `SELECT * from cohort`
      db.serialize(function(){
        db.all(listData, function(err,rows){
          if(err){
            console.log(err)
          }
          else {
            console.log(rows)
            // rows.forEach((row)=>{
            // console.log(`${row.id} | ${row.cohort_name} | ${row.created_at}`}));
          }
        })
      })
    }

    help(){
      console.log("addData(cohort_name,created_at)")
      console.log("updateData(new_cohort_name,new_created_at,id)")
      console.log("deleteData(id)")
      console.log("listData()")
      console.log("help()")
    }


}

export default Cohort
