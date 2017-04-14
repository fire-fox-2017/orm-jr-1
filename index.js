"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl');
const sqlite = require('sqlite3').verbose();

let replServer = repl.start({prompt : '> '});

// replServer.context.help = help;
replServer.context.dbModel = new DBModel();

replServer.context.Student = Student;
replServer.context.Cohort = Cohort;
