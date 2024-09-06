export default function getListStudentsByLocation(student, city) {
  return student.filter(
    (item) => item.location.localeCompare(city) === 0,
  );
}
