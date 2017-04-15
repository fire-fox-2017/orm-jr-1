import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
var db = new DBModel("../db/test.db")

function testing(konek) {
    Student.create(konek, new Student("windiana", "krismanuyar", 1))
    let tmp;
    db.connection.serialize(function() {
        db.connection.each("SELECT id FROM students order by id desc limit 1", function(err, row) {
            tmp = row.id
            Student.update(konek, new Student("windi", "krism", 1, tmp))
        });
    });

}

//console.log(getlastid())
console.log(testing(db.connection))
