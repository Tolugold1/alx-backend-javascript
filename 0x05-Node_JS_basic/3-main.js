const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
<<<<<<< HEAD
console.log("After!");
=======

/* countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    }); */
console.log("After!");
>>>>>>> 7fc80db735a7bed54c620b0ec90db880240cc9ce
