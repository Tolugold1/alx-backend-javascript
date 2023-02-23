const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf-8').toString().split('\n');
    let dt = data.slice(1, (data.length) + 1);
    console.log('Number of students:', dt.length);
    const name_field = {};
    for (const row of dt) {
      let students = row.split(',');
      if (!name_field[students[3]]) {
        name_field[students[3]] = [];
      }
      name_field[students[3]].push(students[0]);
    }
    console.log(name_field);
    for (let key of Object.keys(name_field)) {
      if (key) {
        process.stdout.write(`Number of students in ${key}: ${name_field[key].length}. List: ${name_field[key].join(',')}`);
      }
  }
} catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
