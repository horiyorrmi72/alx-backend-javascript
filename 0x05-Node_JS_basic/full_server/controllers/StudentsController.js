import process from 'process';
import readDatabase from '../utils';

export default class StudentController {
  static async getAllStudents(request, response) {
    try {
      const dbFile = process.argv[2];
      const data = await readDatabase(dbFile);
      let responseText = 'This is the list of our students \n';
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase()
        .localeCompare(b.toLowerCase()));
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
      const availableMajors = ['CS', 'SWE'];
      const dbFile = process.argv[2];
      const { major } = request.params;

      if (!major || !availableMajors.includes(major)) {
        return response
          .status(500)
          .json({ message: 'Major Parameter must be CS or SWE' });
      }
      const studentsData = readDatabase(dbFile);
      const students = studentsData[major];
      if (!students) {
        return response
          .status(500)
          .send(`No students found for major : ${major}`);
      }
      const studentList = students.join(',');
      const responseText = `List: ${studentList}`;
      return response.send(responseText);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}
