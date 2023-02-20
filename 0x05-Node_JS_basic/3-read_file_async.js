const fs = require("fs")
const countStudents = (path) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"))
            }
            const messages = []
            const dt = data.toString().split("\n").slice(1, data.length)
            const msg1 = `Number of students: ${dt.length}`
            console.log(msg1)
            messages.push(msg1)

            let obj = {}
            for (let row of dt) {
                let student = row.split(",");
                if (!obj[student[3]]) {
                    obj[student[3]] = [];
                }
                obj[student[3]].push(student[0]);
            }

            for (let key of Object.keys(obj)) {
                if (key) {
                    const msg2 = `Number of students in ${key}: ${obj[key].length}. List: ${obj[key].join(", ")}`
                    console.log(msg2)
                    messages.push(msg2)
                }
            }
            resolve(messages);
        });
    });
    return promise
}

module.exports = countStudents;