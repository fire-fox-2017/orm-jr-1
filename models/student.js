"use strict"

const sqlite = require('sqlite3').verbose();

class Student {
  constructor(firstName, lastName, cohortId, id = null) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.cohort_id = cohortId;
    this.id = id;
  }

  static getLastId(connection) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM students`;
    db.serialize(() => {
      db.get(`SELECT LAST_INSERT_ROWID()`, (err, lastId) => {
        if(err) {
          console.log(err);
        } else {
          return lastId;
        }
      });
    });
  }

  static findAll(connection, limitOffset, callback) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM students LIMIT ${limitOffset.limit} OFFSET ${limitOffset.offset}`;
    db.serialize(() => {
      db.all(query, (err, rows) => {
        callback(rows, err);
      });
    });
  }

  static where(connection, string, callback) {
    let searchArr = string.split(" = ");
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM students WHERE ${searchArr[0]} = ${searchArr[1]}`;
    db.serialize(() => {
      db.all(query, (err, rows) => {
        callback(rows, err);
      });
    });
  }

  static create(connection, studentObj) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `INSERT INTO students (first_name, last_name, cohort_id) VALUES ('${studentObj.first_name}', '${studentObj.last_name}', '${studentObj.cohort_id}')`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when inserting student to database, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Student has been succesfully appended.`);
        }
      });
    });
  }

  // FINDORCREATE IS UNFINISHED
  static findOrCreate(connection, studentObj) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `INSERT INTO students (first_name, last_name, cohort_id) VALUES ('${studentObj.first_name}', '${studentObj.last_name}', '${studentObj.cohort_id}')`;

  }

  static update(connection, newStudentObj) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `UPDATE students SET first_name = '${newStudentObj.first_name}', last_name = '${newStudentObj.last_name}', cohort_id = '${newStudentObj.cohort_id}' WHERE id = '${newStudentObj.id}'`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when updating student data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Student has been succesfully updated.`);
        }
      });
    });
  }

  static delete(connection, studentId) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `DELETE FROM students WHERE id = '${studentId}'`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when deleting student data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Student has been succesfully deleted.`);
        }
      });
    });
  }

  static findById(connection, studentId) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM students WHERE id = '${studentId}'`;
    db.serialize(() => {
      db.each(query, (err, row) => {
        if(err) {
          console.log(`Error has occured when searching student data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(JSON.stringify(row));
        }
      });
    });
  }


}

export default Student


// Student.where(dbModel.connection, "first_name = 'Joko'",  function(data, err) {if(!err) {console.log(data);} else { console.log(err); }})
