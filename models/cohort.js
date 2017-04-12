"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, id) {
    this.cohortName = name;
    this.id = id;
  }

  static create(db, cohort) {
    let createQuery = `INSERT INTO cohorts(name) VALUES ('${cohort.cohortName}')`;
    db.serialize(() => {
      db.run(createQuery, (err) => {
        err ? console.log(err) : console.log(`success menambah '${cohort.cohortName}'`);
      });
    });
  }

  static update(db, cohort) {
    let updateQuery = `UPDATE cohorts SET name = '${cohort.cohortName}' WHERE id = ${cohort.id}`;
    db.serialize(() => {
      db.run(updateQuery, (err) => {
        err ? console.log(err) : console.log(`berhasil update data '${cohort.cohortName}'`);
      });
    });
  }

  static delete(db, id) {
    let deleteQuery = `DELETE FROM cohorts WHERE id  = ${id}`;
    db.serialize(() => {
      db.run(deleteQuery, (err) => {
        err ? console.log(err) : console.log(`berhasil di delete`);
      });
    });
  }

  static findById(db, id) {
    let findQuery = `SELECT * FROM cohorts`
  }

}

export default Cohort
