import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const app = express();

app.get('/', AppController.getHomepage);
app.get('/students', StudentController.getAllStudents);
app.get('/students/:major', StudentController.getAllStudentsByMajor);
export default app;
