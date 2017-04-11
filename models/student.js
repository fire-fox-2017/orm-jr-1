"use strict"

class Student {
  constructor (firstname, lastname, cohort_id) {
    this._id = null;

    this._firstname = firstname;
    this._lastname = lastname;
    this._cohort_id = cohort_id
/*
    this._firstname = "Unknown";
    if (args && args.hasOwnProperty(args.['firstname']))
      this._firstname = args.['firstname']

    this._lastname = "";
    if (args && args.hasOwnProperty(args.['lastname']))
      this._lastname = args.['lastname']
*/
  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get cohort_id() {
    return this._cohort_id;
  }


  }

  static create (connection, student_obj) {
    let db = connection;
    let current_student = this;

    let query = `INSERT INTO students (firstname, lastname, cohort_id) VALUES ( '${student_obj.firstname}', '${student_obj.lastname}', '${student_obj.cohort_id}')`

    db.serialize(function () {
      db.run(query, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          current_student._id = this.lastID;
          console.log(`Insert Student ${student_obj.firstname} Successfully.`);
        }
      });
    });



  }

}

export default Student
