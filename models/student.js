"use strict"

class Student {
  constructor(firstname,lastname,cohort,id){
    this.firstname = firstname
    this.lastname = lastname
    this.cohort = cohort
    this.id = id
  }
  static create(connection, data){
    let db = connection
    let query = `INSERT INTO student (firstname, lastname, cohort_id) VALUES ('${data.firstname}','${data.lastname}','${data.cohort}')`
    db.serialize(()=>{
      db.run(query, (err)=>{
        if(err){
          console.log(err.message);
        } else {
          console.log('CREATE STUDENT SUCESS');
        }
      })
    })
  }

  static update(connection, data){
    let db = connection
    let query = `UPDATE student SET firstname = '${data.firstname}', lastname = '${data.lastname}', cohort_id = '${data.cohort}' WHERE ID = ${data.id}`
    db.serialize(()=>{
      db.run(query, (err)=>{
        if(err){
          console.log(err.message);
        } else {
          console.log('UPDATE STUDENT SUCESS');
        }
      })
    })
  }

  static delete(connection,data){
    let db = connection
    let query = `DELETE FROM student WHERE ID = ${data}`
    db.serialize(()=>{
      db.run(query, (err)=>{
        if(err){
          console.log(err.message);
        } else {
          console.log('DELEE STUDENT SUCESS');
        }
      })
    })
  }

  static findById(db,data){
    // let db = connection
    let query = `SELECT * FROM student WHERE ID = ${data}`
    db.all(query,(err, data)=>{
      if(err){
        console.log(err.message);
      } else {
        console.log(data);
      }
    })
  }

  static findAll(db,callback){
    // let db = connection
    let query = `SELECT * FROM student`
    db.all(query, callback)
  }

  static where(db,arg,callback){
    let query = `SELECT * FROM student WHERE ${arg}`
    db.all(query, callback)
  }

}

export default Student
