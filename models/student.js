"use strict"

import DBModel from "./db_model.js"

class Student {
    constructor(firstname, lastname, idCohor, id = 0) {
        this._firstname = firstname
        this._lastname = lastname
        this._idCohor = idCohor
        this._id = id
    }

    static create(db, objStudent) {
        let query1 = `INSERT INTO students (firstname, lastname, idCohor) VALUES ('${objStudent._firstname}', '${objStudent._lastname}', ${objStudent._idCohor})`
        db.serialize(() => {
            db.run(query1, (err) => {
                if (err) {
                    console.log(`Insert to table student error`);
                    reject(err)
                } else {
                    console.log(`Insert to table student successfull`);
                }
            })
        })
    }

    static update(db, objStudent) {
        db.serialize(() => {
            let query2 = `UPDATE students SET firstname = '${objStudent._firstname}', lastname = '${objStudent._lastname}', idCohor = '${objStudent._idCohor}' WHERE id = '${objStudent._id}'`
            db.run(query2, (err) => {
                if (err) {
                    console.log(`Update data error`);
                } else {
                    console.log(`Update data: ${objStudent._id}|${objStudent._firstname}|${objStudent._lastname}|${objStudent._idCohor}`);
                }
            })
        })
    }

    static delete(db, idStudent) {
        db.serialize(() => {
            let query3 = `DELETE FROM students WHERE id = ${idStudent}`
            db.run(query3, (err) => {
                if (err) {
                    console.log(`Delete data student with id: ${idStudent} error`);
                } else {
                    console.log(`Delete data student with id: ${idStudent} successfull`);
                }
            })
        })
    }

    static findById(db, idStudent) {
        db.serialize(() => {
            let query4 = `SELECT * FROM students WHERE id = ${idStudent}`
            db.each(query4, (err, row) => {
                if (err) {
                    console.log(`Get data student with id: ${idStudent} error`);
                } else {
                    console.log(`${row.id}|${row.firstname}|${row.lastname}|${row.idCohor}`);
                }
            })
        })
    }

    static findAll(db, callback) {
        db.serialize(() => {
            let query5 = `SELECT * FROM students`
            db.all(query5, (err, rows) => {
                callback(rows, err)
            })
        })
    }

    static where(db, string, callback) {
        let str = string.split('=')
        db.serialize(() => {
            let query6 = `SELECT * FROM students WHERE ${str}`
            db.all(query6, (err, rows) => {
                callback(rows, err)
            })
        })
    }
}

export default Student
