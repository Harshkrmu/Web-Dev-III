use("AIML")

db.createCollection("students")

// CREATE

// db.students.insertOne({
//     "name": "John Doe",
//     "age": 22,
//     "RollNumber": "AIML123",
// })

// db.students.insertMany([{
//     "name": "Jane Smith",
//     "age": 21,
//     "RollNumber": "AIML124",
// },{
//     "name": "Alice Johnson",
//     "age": 23,
//     "RollNumber": "AIML125",
// },{
//     "name": "Bob Brown",
//     "age": 20,
//     "RollNumber": "AIML126"
// }])

// READ

// db.students.find()   // to get all data

// db.students.findOne()   // to get first data

// db.students.findOne({"RollNumber": "AIML124"})   // to get specific data

// db.students.find({RollNumber: "AIML124"})   // to get specific data , if more than one all with same reference

// UPDATE

// db.students.updateOne(               // use updateMany() to update all data with same reference
//     {"RollNumber": "AIML124"}, 
//     {$set: {"name": "yoyoy"}
// })

// DELETE

// db.students.deleteOne({"RollNumber": "AIML124"})   // use deleteMany() to delete all data with same reference