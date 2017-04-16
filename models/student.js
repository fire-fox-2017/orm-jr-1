"use strict"

const sqlite = require('sqlite3').verbose();

class Student {
  constructor (firstname, lastname, cohort, id = null) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohort_id = cohort;
    this.id = id;
  }

  static create (db, obj) {
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.run(`INSERT INTO students (firstname, lastname, cohort_id) VALUES('${obj.firstname}', '${obj.lastname}', ${obj.cohort_id});`, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`Insert student sucess`);
        }
      });
    });
  }

  static update (db, obj) {
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.run(`UPDATE students SET firstname = '${obj.firstname}', lastname = '${obj.lastname}', cohort_id = ${obj.cohort_id} WHERE id = ${obj.id};`, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`Update student sucess`);
        }
      });
    });
  }

  static delete (db, id) {
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.run(`DELETE FROM students WHERE id = '${id}';`, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`Delete student sucess`);
        }
      });
    });
  }

  static findById (db, id) {
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.each(`SELECT * FROM students WHERE id = '${id}';`, function (err, row) {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(row));
        }
      });
    });
  }

  static findAll (db, callback) {
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.all(`SELECT * FROM students;`, function (err, rows) {
        callback(rows, err);
      });
    });
  }

  static where (db, str, callback) {
    let property = str.split(" = ")[0];
    let value = str.split(" = ")[1];
    db = new sqlite.Database(db.filename);
    db.serialize(function () {
      db.all(`SELECT * FROM students WHERE ${property} = ${value};`, function (err, rows) {
        callback(rows, err);
      });
    });
  }
}

export default Student
