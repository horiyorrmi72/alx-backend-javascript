import process from 'process';
import readDatabase from '../utils';

export default class StudentController {
  static async getAllStudents(request, response) {
    try {
      const dbFile = process.argv[2];
      const data = await readDatabase(dbFile);
      let responseText = 'This is the list of our students \n';
      Object.keys(data)
        .sort()
        .forEach((field) => {
          const studentList = data[field].join(', ');
          responseText += `Number of sudents in ${field}: ${data[field].length}. List:${studentList} \n`;
        });
      response.status(200);
      response.send(responseText.trim());
      return;
    } catch (error) {
      response.status(500);
      response.send('Cannot load database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const dbFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major Parameter must be CS or SWE');
      return;
    }
    try {
      const studentsData = await readDatabase(dbFile);
      const students = studentsData[major];
      if (!students) {
        response.status(500);
        response.send(`No students found for major : ${major}`);
        return;
      }
      const studentList = students.join(', ');
      const responseText = `List: ${studentList}`;
      response.send(responseText);
      return;
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }
}
