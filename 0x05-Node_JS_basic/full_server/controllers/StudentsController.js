import { readDatabase } from '../utils.js';
import process from 'process';

export default class StudentController {
	static async getAllStudents(request, response) {
		try {
			const db_file = process.argv[2];
			let data = await readDatabase(db_file);
			let responseText = `This is the list of our students \n`;
			const fields = Object.keys(data).sort((a, b) =>
				a.toLowerCase().localeCompare(b.toLowerCase())
			);
			fields.forEach((field) => {
				const studentList = data[field].join(',');
				responseText += `Number of sudents in ${field}: ${data[field].length}. List:${studentList} \n`;
			});
			return response.status(200).send(responseText.trim());
		} catch (error) {
			return response.status(500).send('Cannot load database');
		}
	}

	static async getAllStudentsByMajor(request, response) {
		try {
			let availableMajors = ['CS', 'SWE'];
			const db_file = process.argv[2];
			const major = request.params.major;

			if (!major || !availableMajors.includes(major)) {
				return response
					.status(500)
					.json({ message: 'Major Parameter must be CS or SWE' });
			}
			const studentsData = readDatabase(db_file);
			const students = studentsData[major];
			if (!students)
				return response
					.status(500)
					.send(`No students found for major : ${major}`);
			const studentList = students.join(',');
			const responseText = `List: ${studentList}`;
			return response.send(responseText);
		} catch (error) {
			return response.status(500).send('Cannot load the database');
		}
	}
}
