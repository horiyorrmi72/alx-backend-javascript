/* Write a function named createEmployeesObject that will receive two arguments: departmentName (String) 
* employees (Array of Strings)
* The function should return an object with the department name as the key and the employees as the value.
*/
export default function createEmployeesObject(departmentName, employees) {
    const employeesObject = {
      [departmentName]: employees,
    };
    return employeesObject;
  }