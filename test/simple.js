import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
const sqlite = require('sqlite3').verbose();
var db = new DBModel("./db/test.db")
db.setup()
Student.create(db.connection, new Student("Bill", "Koo", 1))
console.log("Inserting new student...")
db.connection.each(`SELECT * FROM students WHERE id = 1;`, function(err,data) {
   if (!err && typeof data === 'object') {
     console.log('test create student : success');
   } else {
     console.log('test create student : fail');
   }
});
Student.update(db.connection, new Student("Zani", "Akbar", 2, 1))
console.log("UPDATE DATA")
db.connection.each('select * from students where firstname = "Zani" and id = 1', function (err, data){
  if(!err && typeof data === 'object'){
    console.log('test update student : success')
  } else {
    console.log('test update student : fail')
  }
})