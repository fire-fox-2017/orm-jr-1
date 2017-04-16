Student.create(dbModel.connection, new Student("Windiana", "Krismanuya", 1))
Cohort.create(dbModel.connection, new Cohort("Mavericks"))

Student.update(dbModel.connection, new Student("Windi", "krism", 2, 1))

Student.delete(dbModel.connection, 1)
SELECT * FROM students WHERE id = '3'


Student.findAll(dbModel.connection, function( err,data) {
    if (!err) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    } else {
        console.log('Error')
    }
})

Student.findAll(dbModel.connection,{limit: 2, offset: 1}, function( err,data) {
    if (!err) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    } else {
        console.log('Error')
    }
})

Student.where(dbModel.connection," firstname='Windi' ", function( err,data) {
    if (!err) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    } else {
        console.log('Error')
    }
})

Student.findOrCreate(dbModel.connection, new Student("Windiana","Krismayuyar",1))
Cohort.findOrCreate(dbModel.connection,new Cohort("Mavericks"))
