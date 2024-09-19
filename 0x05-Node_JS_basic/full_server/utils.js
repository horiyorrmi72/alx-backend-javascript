import fs from 'fs';

export function readDatabase(filepath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, 'utf8', (err, data) => {
			if (err) {
				return reject(new Error(`Cannot load the database`));
			}
			const studentsByMajor = {};
			const eachLine = data.trim().split('\n');
			for (const line of eachLine) {
				const [lastname, firstname] = line.split(',');
				if (!studentsByMajor[lastname]) {
					studentsByMajor[lastname] = [];
				}
				studentsByMajor[lastname].push(firstname);
			}
			resolve(studentsByMajor);
		});
	});
}
