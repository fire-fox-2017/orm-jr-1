"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, id = null) {
    this.name = firstName;
    this.id = id;
  }

  static create(connection, cohortObj) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `INSERT INTO cohorts (name) VALUES ('${cohortObj.name}')`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when inserting cohort to database, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Cohort has been succesfully appended.`);
        }
      });
    });
  }

  static update(connection, newCohortObj) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `UPDATE cohorts SET name = '${newCohortObj.name}' WHERE id = '${newCohortObj.id}'`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when updating cohort data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Cohort has been succesfully updated.`);
        }
      });
    });
  }

  static delete(connection, cohortId) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `DELETE FROM cohorts WHERE id = '${cohortId}'`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) {
          console.log(`Error has occured when deleting cohort data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(`Cohort has been succesfully deleted.`);
        }
      });
    });
  }

  static findById(connection, cohortId) {
    let file = connection.filename;
    let db = new sqlite.Database(file);
    let query = `SELECT * FROM cohorts WHERE id = '${cohortId}'`;
    db.serialize(() => {
      db.each(query, (err, row) => {
        if(err) {
          console.log(`Error has occured when searching cohort data, please check to the following error:`);
          console.log(err);
        } else {
          console.log(JSON.stringify(row));
        }
      });
    });
  }

}

export default Cohort
