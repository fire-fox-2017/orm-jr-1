import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
import Cohort from "../models/cohort.js";

let db = new DBModel("../db/test.db")


// Test for student db

Student.create(db.connection, new Student("Uci", "Lubis", 2))
db.connection.serialize(() => {
    let GET_STUDENT = `SELECT * FROM students WHERE firstname = "Uci" AND lastname = "Lubis" AND idCohor = "2"`
    db.connection.each(GET_STUDENT, (err, row) => {
        if (err) {
            console.log(`Data student not found, create function is error`);
        } else {
            console.log(`Data student found: ${row.id}|${row.firstname}|${row.lastname}|${row.idCohor}`);
        }
    })
})


/*
Student.findById(db.connection, 1)
db.connection.serialize(() => {
    let GET_STUDENT_BY_ID = `SELECT * FROM students WHERE id = "1"`
    db.connection.each(GET_STUDENT_BY_ID, (err, row) => {
        if (err) {
            console.log(`Data student not found, create function is error`);
        } else {
            console.log(`Data student found`);
        }
    })
})
*/

// Test for cohort db
/*
Cohort.create(db.connection, new Cohort("KELAS AWAK"))
db.connection.serialize(() => {
    let GET_COHORT = `SELECT * FROM cohorts WHERE name = "KELAS AWAK"`
    db.connection.each(GET_COHORT, (err, row) => {
        if (err) {
            console.log(`Data cohort not found, create function is error`);
        } else {
            console.log(`Data cohort found: ${row.id}|${row.name}`);
        }
    })
})


Cohort.findById(db.connection, 1)
db.connection.serialize(() => {
    let GET_COHORT_ID = `SELECT * FROM cohorts WHERE id = "1"`
    db.connection.each(GET_COHORT_ID, (err, row) => {
        if (err) {
            console.log(`Data cohort not found, create function is error`);
        } else {
            console.log(`Data cohort found`);
        }
    })
})
*/

// Setup database
/*
const repl = require('repl');
let replServer = repl.start({
    prompt: '> '
})
replServer.context.dbModel = db
*/