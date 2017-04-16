"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let repl = require("repl");
let replServer = repl.start({prompt: "> "});
let dbModel = new DBModel ("db/student.db")
// let student = new Student()

//Student.create(dbModel.connection, new Student("Windiana","Krismanuyar",1))
//Student.update(dbModel.connection, new Student("Windi","Krism",1,1))
//Student.delete(dbModel.connection, 1)
//Student.findById(dbModel.connection,1)
// Student.findAll(dbModel.connection, function(err,data){
//   if(!err){
//     for(var i = 0; i < data.length; i++){
//       console.log(data[i]);
//     }
//   }else {
//       console.log("Error");
//     }
// })
// Student.where(dbModel.connection,"firstname = 'Windi'",
// function(err,data){
//       if(!err){
//       for(let i = 0; i < data.length; i++){
//         console.log(data[i]);
//       }
//     } else {
//       console.log(`Error`)
//     }
// });
// //replServer.context.connection = dbModel.connection;
replServer.context.dbModel = dbModel
// replServer.context.cohort = cohort.addData;
replServer.context.Student = Student;
// replServer.
