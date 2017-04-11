"use strict"
// const sqlite = require("sqlite3").verbose();
// const db = new sqlite.Database(`./db/student.db`);
// //const replServer = require("repl");

class Student {
    constructor(firstname,lastname,id){
      this.firstname = firstname
      this.lastname = lastname
      this.id = id
      this.connection = db;
    }

    create(connection, obj){
      console.log(connection);
      const db = sqlite.Database(`./db/student.db`);
      const replServer = require("repl");
      let createData = `INSERT INTO student (firtstname,lastname) VALUES ("${obj.firstname}", "${obj.lastname}","${obj.id}")`;
      db.serialize( function(){
        db.run(createData, function(err){
          if(err){
            console.log(err)
          }
          else {
            console.log("Create table Success!")
          }
        })
      })
    }

addStudent(firstname,lastname){
  let add = `INSERT INTO student (firstname,lastname) VALUES (${firstname},${lastname})`
  db.serialize(function (){
    db.run(add, function(err){
      if(err){
        console.log(err)
      }
      else {
        console.log("Add Success!")
      }
    })
  })
}

  updateStudent(new_firstname,new_lastname,id){
    let update = `UPDATE student SET firstname = ${new_firstname} lastname = ${new_lastname} WHERE id = ${id}`
    db.serialize(function (){
        db.run(update, function(err){
          if(err){
            console.log(err)
          }
          else{
            console.log("Update Success!")
          }
        })
    })
  }

  deleteStudent(id){
    let del = `DELETE FROM student WHERE id = ${id}`
    db.serialize(function(){
      db.run(del,function(err){
        if(err){
          console.log(err)
        }
        else {
          console.log("Delete Success!")
        }
      })
    })
  }

  listStudent(){
    let list = `SELECT * FROM student`
    db.serialize(function(){
        db.all(del,function(err,rows){
          if(err){
            console.log(err)
          }
          else{
            console.log(rows)
            // rows.forEach(row) => {
            //    console.log(`${row.id} | ${row.firstname} | ${row.lastname}`)
             //}
          }
        })
    })
  }
    help(){
      console.log("HELP COMMAND LIST \n -----------------------")
      console.log("addStudent(new_firstname,new_lastname,id)")
      console.log("updateStudent(id)")
      console.log("deleteStudent(id)")
      console.log("listStudent()")
      console.log("help()")
    }
}
//     where(connection, )
// }

export default Student
