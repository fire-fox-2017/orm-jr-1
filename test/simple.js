
import DBModel from "../models/db_model.js";
import Student from "../models/student.js";
const sqlite = require('sqlite3').verbose();
var assert = require('assert');


var dbModel = new DBModel(new sqlite.Database('../db/test.db'))
dbModel.setup();
console.log('Inserting new student');
Student.create(dbModel.connection, new Student("Windiana", "Krismanuya", 1))

console.log('Update Data');
Student.update(dbModel.connection, new Student("Windi", "krism", 2, 1))
