"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let repl = require("repl");
let replServer = repl.start({prompt: "> "});
let dbModel = new DBModel ("db/student.db")

//replServer.context.connection = dbModel.connection;
replServer.context.dbModel = dbModel
// replServer.context.cohort = cohort.addData;
// replServer.context.Student = Student;
// replServer.
