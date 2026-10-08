const students = require("../data/students");

// GET /students
const getAllStudents = (req, res) => {
  res.status(200).json(students);
};

// GET /students/:id
const getStudentById = (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
};

// POST /students
const addStudent = (req, res) => {
  const { name, course, age } = req.body;
  const newId = students.length ? students[students.length - 1].id + 1 : 1;

  const newStudent = { id: newId, name, course, age };
  students.push(newStudent);

  res.status(201).json(newStudent);
};

// PUT /students/:id
const updateStudent = (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, course, age } = req.body;
  student.name = name;
  student.course = course;
  student.age = age;

  res.status(200).json(student);
};

// DELETE /students/:id
const deleteStudent = (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deleted = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted", student: deleted[0] });
};

module.exports = {getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent,};