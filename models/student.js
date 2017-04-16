// "use strict"
//
// const sqlite = require('sqlite3').verbose();
//
// class Student {
//   constructor(id_student, firstname, lastname, birthdate, cohort_id){
//     this.id_student = id_student;
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthdate = birthdate;
//     this.cohort_id = cohort_id;
//   }
//   //(C)RUD / create
//   static add_student(db, obj){
//     let db = new sqlite.Database(./db/student.db);
//     var INSERT_STUDENT = `INSERT INTO students (firstname, lastname, birthdate, cohort_id) VALUES ('${obj.firstname}', '${obj.lastname}', '${obj.birthdate}', '${obj.cohort_id}');`;
//     db.serialize(function(){
//       db.run(INSERT_STUDENT, function(err){
//         if (err){
//           console.log(err);
//         } else {
//           console.log('Add Student Succesfull');
//         }
//       });
//     });
//   }
//   //C(R)UD List All
//   static list_all_student(db){
//     let db = new sqlite.Database(./db/student.db);
//     var LIST_ALL_QUERY = `SELECT * FROM students`;
//     db.serialize(function(){
//         db.each(LIST_ALL_QUERY, function(err, row){if (err){
//           console.log(err);
//         } else {
//           console.log(row.id, row.firstname, row.lastname, row.birthdate);
//         }
//       });
//     });
//   }
//   //CR(U)D Update
//   static update_student(id, firstname, lastname, birthdate, cohort_id){
//     let db = new sqlite.Database(./db/student.db);
//     var UPDATE_QUERY = `UPDATE students SET firstname='${firstname}',lastname='${lastname}',birthdate='${birthdate}',cohort_id='${cohort_id}' WHERE id='${id}'`;
//     db.serialize(function(){
//       db.run(UPDATE_QUERY, function(err){
//         if (err){
//           console.log(err);
//         } else {
//           console.log('Update Student Data Succesfull');
//         }
//       });
//     });
//   }
//   //CRU(D)
//   static delete_student(id){
//     let db = new sqlite.Database(./db/student.db);
//     var DELETE_QUERY = `DELETE FROM students WHERE id='${id}' `;
//     db.serialize(function(){
//       db.run(DELETE_QUERY, function(err){
//         if (err){
//           console.log(err);
//         } else {
//           console.log('Delete Student Data Succesfull');
//         }
//       });
//     });
//   }
//
// }
//
// export default Student
"use strict"
const sqlite = require('sqlite3').verbose();

class Student {
    constructor(firstName, lastName, idcohort, idStudent = 0) {
        this.first_name = firstName
        this.last_name = lastName
        this.id_cohort = idcohort
        this.id_student = idStudent
    }

    static create(db, obj) {
        console.log(db);
        var db = new sqlite.Database(db.filename);
        var SEED_DATA = `INSERT INTO students (firstname, lastname, id_cohort) VALUES ('${obj.first_name}', '${obj.last_name}' ,${obj.id_cohort});`;
        console.log(SEED_DATA)
        db.serialize(function() {
            db.run(SEED_DATA, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('INSERT SUCCESS');
                }
            });
        });

    }
    static update(db, obj) {

        var db = new sqlite.Database(db.filename);
        var UPDATE_DATA = `UPDATE students SET firstname = '${obj.first_name}',lastname = '${obj.last_name}', id_cohort = ${obj.id_cohort} WHERE id=${obj.id_student};`;
        console.log(UPDATE_DATA)
        db.serialize(function() {
            db.run(UPDATE_DATA, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('UPDATE SUCCESS');
                }
            });
        });

    }
    static delete(db, id) {

        var db = new sqlite.Database(db.filename);
        let DELETE_QUERY = `DELETE FROM students WHERE id=${id}`;
        console.log(DELETE_QUERY)
        db.serialize(function() {
            db.run(DELETE_QUERY, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('DELETE SUCCESS');
                }
            });
        });
    }

    static findById(db, id) {
        var db = new sqlite.Database(db.filename);
        let SELECT_QUERY = `SELECT * FROM students WHERE id = '${id}'`;
        console.log(SELECT_QUERY)
        db.serialize(function() {
            db.each(SELECT_QUERY, function(err, row) {
                if (err) {
                    console.log(err);
                }
                console.log(JSON.stringify(row))
            });
        });
    }

    static findAll(db, callback) {
        let SELECT_QUERY = `SELECT * FROM students`;
        var db = new sqlite.Database(db.filename);
        db.serialize(function() {
            db.all(SELECT_QUERY, callback)
        })
    }

    static where(db, query, callback) {
        let SELECT_QUERY = `SELECT * FROM students WHERE ${query}`;
        console.log(SELECT_QUERY)
        var db = new sqlite.Database(db.filename);
        db.serialize(function() {
            db.all(SELECT_QUERY, callback)
        })
    }
}

export default Student
