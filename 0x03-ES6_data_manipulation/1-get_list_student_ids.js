const getListStudentIds = (listStudents) => {
  let listofStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listSoftudentIds;
  }
  listofStudentIds = listStudents.map((student) => student.id);
  return listofStudentIds;
};

export default getListofStudentIds;
