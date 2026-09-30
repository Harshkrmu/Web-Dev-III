use("AIML")

// to find number of retrieving documents.
// db.students.find().count()

// db.students.find().skip(4).limit(0)

// to find specific data
// db.students.find
// ({"studentId": "STU001"})


// to find specific fields of all data
// db.students.find({},{"studentId":1, "name":1, "age":1})

// db.students.find({"attendance":{
//     $gte: 70,
//     $lte:90
// }})