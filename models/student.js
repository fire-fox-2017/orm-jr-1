"use strict"

const sqlite = require('sqlite3').verbose();

class Student {
  constructor(firstname, lastname, id_cohort, id_student=0){
    this.firstname = firstname;
    this.lastname = lastname;
    this.id_cohort = id_cohort;
    this.id_student = id_student;
  }

  static create(connection, objStudent){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query1 = `INSERT INTO student (firstname, lastname, id_cohort) VALUES ('${objStudent.firstname}', '${objStudent.lastname}', '${objStudent.id_cohort}')`;
    db.serialize(function(){
      db.run(query1, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Memasukkan Data Siswa');
        }
      })
    });
  }

  static update(connection, objStudent){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query2 = `UPDATE student SET firstname = '${objStudent.firstname}' ,lastname = '${objStudent.lastname}',id_cohort = '${objStudent.id_cohort}' where id = '${objStudent.id_student}'`;
    db.serialize(function(){
      db.run(query2, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Mengedit Data Siswa');
        }
      })
    });
  }

  static delete(connection,id_student){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query3 = `DELETE FROM student WHERE id = '${id_student}'`;
    db.serialize(function(){
      db.run(query3, function(err){
        if (err){
          console.log(err);
        } else {
          console.log('Sukses Menghapus Data Siswa');
        }
      })
    });
  }

  static findById(connection,id_student){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query4 = `SELECT * FROM student where id = '${id_student}'`;
    db.serialize(function(){
      db.each(query4, function(err, row){
        if (err){
          console.log(err);
        } else {
          console.log(JSON.stringify(row));
        }
      })
    });
  }

  static findAll(connection, callback){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    let query6 = `SELECT * FROM student`;
    db.serialize(function(){
      db.all(query6, function(err, rows){
        callback(rows,err)
      });
    });
  }

  static where(connection, string ,callback){
    var file = connection.filename;
    var db = new sqlite.Database(file);
    var string = string.split(' = ');
    let query7 = `SELECT * FROM student WHERE ${string[0]} = ${string[1]}`;
    // console.log(string);
    db.serialize(function(){
      db.all(query7, function(err, rows){
        callback(rows,err)
      });
    });
  }

}

export default Student

// Student.findAll(dbModel.connection,function(data, err) {if(!err) {console.log(data);} else { console.log(err); }})
// Student.where(dbModel.connection, "firstname = 'Alim'",  function(data, err) {if(!err) {console.log(data);} else { console.log(err); }})
