const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString().split('\n');
    const dt = data.slice(1, data.length);
    console.log(`Number of students: ${dt.length}`);
    const nameField = {};
    for (const row of dt) {
      const students = row.split(',');
      if (!nameField[students[3]]) {
        nameField[students[3]] = [];
      }
      nameField[students[3]].push(students[0]);
    }
    for (const key of Object.keys(nameField)) {
      if (key) {
        process.stdout.write(`Number of students in ${key}: ${nameField[key].length}. List: ${nameField[key].join(', ')}\n`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
