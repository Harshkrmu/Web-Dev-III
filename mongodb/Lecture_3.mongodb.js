use("AIML")

// db.students.aggregate([
//     {
//         // match
//         $match:{
//             attendance:{
//                 $gte:70
//         }}
//     },
//     {
//         // group
//         $group:{
//             _id:"$course"
//         }
//     },
//     // {
//     // // project
//     // }
// ])

// db.students.find(
//     {"course":"CSE"}
// )

// db.students.aggregate([
//     // {
//     //     $match:{"course":"CSE"}
//     // }

//     // {
//     //     $group:{_id:"$course"}
//     // }
    
//     // {
//     //     $project:{_id:0,name:1,attendance:1,course:1}
//     // }
// ])

// db.students.aggregate([
//     {
//         $match:{
//             "marks.math":{$gte:80}
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group:{_id:"$course",Count:{$sum:1}}
//     }
// ])

// db.students.aggregate([
//     {
//         $match:{
//             "course":"BCA"
//         }
//     },
//     {
//         $group:{
//             _id:null,
//             maxMathMarks:{$max:"$marks.math"},
//         }
//     },
// ])

// db.students.aggregate([
//     {
//         $match:{
//             "course":"CSE",
//             "attendance":{$gt:80}
//         }
//     },
//     {
//         $group:{
//             _id:null,
//             numberOfstudents:{$sum:1}
//         }
//     }
// ])

db.students.aggregate([
    {
        $project: {
            name: 1,
            totalMarks: {
                $add : ["$marks.math","$marks.dbms","$marks.web"]
            }
        }
    },
    {
        $sort: {
            totalMarks: -1
        }
    }
])