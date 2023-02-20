const fs = require("fs")
const countStudents = (path) => {
    try {
        let data = fs.readFileSync(path, 'utf-8').toString().split("\n")
        let dt = data.slice(1, data.length)
        console.log("Number of students:", dt.length)

        const name_field = {}
        for (const row of dt) {
            students = row.split(",");
            if (!name_field[students[3]]) {
                name_field[students[3]] = []
            }
            name_field[students[3]].push(students[0]);
        }

        for (let field in name_field) {
            if (field) {
                console.log(`Number of students in ${field}: ${name_field[field].length}. List: ${name_field[field].join(",")}`)
            }
        }
    } catch (error) {
        throw new Error("Cannot load the database")
    }
}

module.exports = countStudents;