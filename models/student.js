"use strict"

class Student {
  constructor(firstname, lastname, cohortId, id) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohortId = cohortId;
    
  }

  static add(db, student) {
    let addQuery = `INSERT INTO students(firstname, lastname, cohort_id) VALUES('${student.firstname}', '${student.lastname}', ${student.cohortId})`;
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

  static update(db, student) {
    let updateQuery = `UPDATE students SET firstname = '${student.firstname}', lastname = '${student.lastname}', cohort_id = ${student.cohortId} WHERE id = ${student.id}`;
    db.serialize(() => {
      db.run(updateQuery, (err) => {
        if(err) {
          console.log(err);
        } else {
          console.log('data berhasil diubah');
        }
      });
    });
  }

}

export default Student