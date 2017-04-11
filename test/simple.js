import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

var db = new DBModel("./db/test.db")

let student = {}

let create = (connection, studentObj) => {
  let file = connection.filename;
  let db = new sqlite.Database(file);
  let query = `INSERT INTO students (first_name, last_name, cohort_id) VALUES ('${studentObj.first_name}', '${studentObj.last_name}', '${studentObj.cohort_id}')`;
  db.serialize(() => {
    db.run(query, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Student has been succesfully appended.`);
      }
    });
  });
}

let update = (connection, newStudentObj) => {
  let file = connection.filename;
  let db = new sqlite.Database(file);
  let query = `UPDATE students SET first_name = '${newStudentObj.first_name}', last_name = '${newStudentObj.last_name}', cohort_id = '${newStudentObj.cohort_id}' WHERE id = '${newStudentObj.id}'`;
  db.serialize(() => {
    db.run(query, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Student has been succesfully updated.`);
      }
    });
  });
}

let where = (connection, string, callback) => {
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
