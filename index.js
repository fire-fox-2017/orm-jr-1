"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";


let dbModel = new DBModel();

const repl = require('repl');
const replServer = repl.start({prompt: '> '});
replServer.context.dbModel = dbModel;
