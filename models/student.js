"use strict"

class Student {
  constructor(firstname, lastname, cohortId) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohortId = cohortId;
  }

  static add(db, student) {
    let addQuery = `INSERT INTO students ('firstname', 'lastname', cohort_id) VALUES ('${student.firstname}', '${student.lastname}', '${student.cohortId}')`;
    db.serialize(() => {
      db.run(addQuery, (err) => {
        if(err) {
          console.log(err);
        } else {
          console.log('data berhasil ditambah');
        }
      });
    });
  }

  static update

}

export default Student