import DBModel from "../models/db_model.js";
import Student from "../models/student.js";

var db = new DBModel('./db/test.db')
var temp = 0;

function testing(konek) {
    Student.create(konek, new Student("Windiana", "Krismanuyar", 1))
    let tmp;
    db.connection.serialize(function() {
        db.connection.each("SELECT id FROM students order by id desc limit 1", function(err, row) {
            tmp = row.id
            Student.update(konek, new Student("Windi", "Krism", 1, tmp))
        });
    });

}

console.log(testing(db.connection))
