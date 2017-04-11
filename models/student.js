"use strict"

const sqlite = require('sqlite3').verbose();

class Student {
  constructor(firstName, lastName, cohortId, id = null) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.cohort_id = cohortId;
    this.id = id;
  }

  static findAll(connection, callback) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM student`;
    db.serialize(() => {
      db.all(query, (err, rows) => {
        if(err) {
          callback(err);
        } else {
          callback(rows);
        }
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
