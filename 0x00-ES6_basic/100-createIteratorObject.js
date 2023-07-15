export default function* createIteratorObject(report) {
  for (const department of report.departments) {
    for (const employee of department.employees) {
      yield employee;
    }
  }
}
