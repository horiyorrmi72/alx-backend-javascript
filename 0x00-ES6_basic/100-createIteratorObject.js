export default function createIteratorObject(report) {
  return {
    getNumberOfDepartments: function () {
      return report.getNumberOfDepartments(report.allEmployees);
    },
  };
}
