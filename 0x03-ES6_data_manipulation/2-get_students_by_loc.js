export default function getListStudentsByLocation(student, city) {
  return getListStudentsByLocation.filter(
    (item) => item.location.localeCompare(city) === 0
  );
}
