"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl');
let replServer = repl.start({
    prompt: '> '
})

function help(){
    console.log('help() : menampilkan daftar help');
    console.log('Menu Siswa\n')
    console.log('Student.create() : menambah data siswa');
    console.log('Student.update() : mengupdate data siswa');
    console.log('Student.delete() : menghapus data siswa');
    console.log('Student.findById() : mencari data siswa berdasarkan id');
    console.log('Student.findAll() : mencari data seluruh siswa');
    console.log('Student.where() : menambah data siswa berdasarkan atribut tertentu\n');
    console.log('Menu Cohort\n')
    console.log('Cohort.create() : menambah data cohort');
    console.log('Cohort.update() : mengupdate data cohort');
    console.log('Cohort.delete() : menghapus data cohort');
    console.log('Cohort.findById() : mencari data cohort berdasarkan id');
    console.log('Cohort.findAll() : mencari data seluruh cohort');
    console.log('Cohort.where() : menambah data cohort berdasarkan atribut tertentu\n');
}

replServer.context.dbModel = new DBModel("./db/student.db")
replServer.context.Student = Student
replServer.context.Cohort = Cohort
replServer.context.help = help

