"use strict"

class Student {
    constructor(firstname, lastname, cohort_id, id) {
        this.firstname = firstname || "";
        this.lastname = lastname || "";
        this.cohort_id = cohort_id || 0;
        this.id = id || 0;
    }
    static create(db, obj) {
        db.serialize(function() {
            db.run(`INSERT INTO student (firstname,lastname,cohort_id) VALUES ('${obj.firstname}','${obj.lastname}',${obj.cohort_id})`, function(err) {
                if (err) {
                    console.log('Error Input student : ' + err);
                } else {
                    console.log('Insert student success.');
                }
            });
        });
    }
    static update(db, obj) {
        db.serialize(function() {
            db.run(`UPDATE student SET firstname = '${obj.firstname}',lastname = '${obj.lastname}',cohort_id = ${obj.cohort_id} where id = ${obj.id}`, function(err) {
                if (err) {
                    console.log('Error Update student : ' + err);
                } else {
                    console.log('Update student success.');
                }
            });
        });
    }
    static delete(db, value) {
        db.serialize(function() {
            db.run(`DELETE FROM student where id=${value}`, function(err) {
                if (err) {
                    console.log('Error Delete student : ' + err);
                } else {
                    console.log('Delete student success.');
                }
            });
        });
    }
    static findById(db, value) {
        db.serialize(function() {
            db.each(`SELECT * FROM  student where id=${value}`, function(err, row) {
                if (err) {
                    console.log('Error findById student : ' + err);
                } else {
                    let temp = JSON.stringify(row);
                    console.log(temp);
                }
            });
        });
    }
    static findAll(db, callback) {
        db.serialize(function() {
            db.all(`SELECT * FROM  student `, function(err, row) {
                if (err) {
                    callback(null, err);
                } else {
                    callback(row, err);
                }
            });
        });
    }
    static where(db, str, callback) {
        db.serialize(function() {
            db.all(`SELECT * FROM  student where ${str} `, function(err, row) {
                if (err) {
                    callback(null, err);
                } else {
                    callback(row, err);
                }
            });
        });
    }
}
export default Student
