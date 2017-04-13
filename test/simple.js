// import DBModel from "../models/db_model.js";
// import Student from "../models/student.js";

const repl = require('repl');
const sqlite = require('sqlite3').verbose();
let file = "../db/test.db";
var db = new sqlite.Database(file)

let replServer = repl.start({prompt: '> '});

let student = {first_name: "Tom", last_name: "Yorke", cohort_id: 2};

let where = (string, callback) => {
  let searchArr = string.match(/\w+/g)
  // let file = connection.filename;
  let db = new sqlite.Database(file);
  let query = `SELECT * FROM students WHERE ${searchArr[0]} = '${searchArr[1]}'`;
  db.serialize(() => {
    db.all(query, (err, rows) => {
      callback(rows, err);
    });
  });
}

let checkCreate = (studentObj) => {
  where(`first_name = '${studentObj.first_name}'`, (data, err) => {
    if(!err && data.length > 0) {
      console.log('first_name (unique) is found, create student check: success');
    } else {
      console.log(`cannot find any matching first_name, create student test: failed`)
    }
  });
}

let checkUpdate = (studentObj) => {
  where(`first_name = '${studentObj.first_name}'`, (data, err) => {
    if(!err && data.length > 0) {
      console.log(`data.first_name = ${data.first_name}; studentObj.first_name = ${studentObj.first_name}`);
      console.log(`data.last_name = ${data.last_name}; studentObj.last_name = ${studentObj.last_name}`);
      console.log(`data.cohort_id = ${data.cohort_id}; studentObj.cohort_id = ${studentObj.cohort_id}`);
      if (data.first_name === studentObj.first_name && data.last_name === studentObj.last_name && data.cohort_id === studentObj.cohort_id) {
        console.log('update student check: success');
      } else {
        console.log(`cannot find any matching data, update student test: failed (2)`);
      }
    } else {
      console.log(`cannot find any matching data, update student test: failed (1)`);
    }
  });
}

let create = (studentObj) => {
  // let file = connection.filename;
  let db = new sqlite.Database(file);
  let query = `INSERT INTO students (first_name, last_name, cohort_id) VALUES ('${studentObj.first_name}', '${studentObj.last_name}', '${studentObj.cohort_id}')`;
  db.serialize(() => {
    db.run(query, (err) => {
      if(err) {
        console.log(err);
      } else {
        checkCreate(studentObj);
      }
    });
  });
}

let update = (newStudentObj) => {
  // let file = connection.filename;
  let db = new sqlite.Database(file);
  let query = `UPDATE students SET first_name = '${newStudentObj.first_name}', last_name = '${newStudentObj.last_name}', cohort_id = '${newStudentObj.cohort_id}' WHERE id = '${newStudentObj.id}'`;
  db.serialize(() => {
    db.run(query, (err) => {
      if(err) {
        console.log(err);
      } else {
        checkUpdate(newStudentObj);
      }
    });
  });
}

replServer.context.create = create;
replServer.context.update = update;
replServer.context.where = where;
