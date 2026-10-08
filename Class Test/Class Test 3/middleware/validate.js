const validateStudent = (req, res, next) => {
  const { name, course, age } = req.body;

  if (!name || !course || age) {
    return res
      .status(400)
      .json({ message: "name, course and age are required" });
  }
  next();
};

module.exports = validateStudent;