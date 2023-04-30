const StudentsValidator = require("../Utils/StudentValidate");
const StudentModel = require("../Models/StudentModel");


var AddNewStudent = (req,res)=>{
    // var newStudnet = req.body;
    // console.log(StudentsValidator(newStudnet));
    var studentValid = StudentsValidator(req.body);
    if(studentValid){
        // var newOne = StudentModel.SaveStudent(req.body);
        var s = new StudentModel(req.body.name, req.body.dept);
        s.saveStudent();
        res.status(201).json(s);
    }else{
        res.status(400).send("Not Compatible")
    }
}


var GetAllStudents = (req,res)=>{
    // res.send(StudentModel.GetStudnets());
    var AllStudents = StudentModel.GetAllStudent();
    res.send(AllStudents);
}

var GetStudentByID = (req,res)=>{//1==>0 || 2==>1
    var StudentID = req.params.id;
    res.json(StudentModel.GetStudentByID(StudentID));
}

var UpdateStudent = (req,res)=>{
    // var updatedStudnet = req.body;
    // var StudentID = req.params.id;
    StudentModel.UpdateStudent(req.params.id, req.body)
    res.json("Updated Successfully");
}


var DeleteStudentByID = (req,res)=>{
    var StudentID = req.params.id;
    Students.splice(StudentID-1,1);
    res.send("Deleted Successfully")
}



module.exports = {AddNewStudent, GetAllStudents, GetStudentByID, UpdateStudent, DeleteStudentByID};