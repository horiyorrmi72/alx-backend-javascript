import fs from 'fs';

export default function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const studentsByMajor = {};
      const eachLine = data.trim().split('\n');
      eachLine.forEach((line, index) => {
        // Skip the first line (the header)
        if (index === 0) return;
        const [firstname, , , major] = line.split(',');

        if (!studentsByMajor[major]) {
          studentsByMajor[major] = [];
        }
        studentsByMajor[major].push(firstname);
      });

      return resolve(studentsByMajor);
    });
  });
}
