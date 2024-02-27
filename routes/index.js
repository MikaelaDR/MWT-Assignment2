var express = require('express');
var router = express.Router();

//Course Class
class Course {
  constructor(){
    this.course_id= [100, 101, 102, 103],
    this.course_name= ["French", "Math", "Biology", "Guitar"],
    this.department = ["Language", "Mathematics", "Science", "Music"],
    this.description=[
      "This course aims to strengthen the students' speaking, listening, reading and writing skills.",
      "This course enables students to consolidate, and continue to develop, an understanding of mathematical concepts related to number sense and operations, algebra, measurement, geometry, data, probability, and financial literacy.",
      "This course presents the fundamentals of biology including the basic physics and chemistry of life, the structure and functions of cell and tissues, and aspects of anatomy, physiology, taxonomy, heredity and evolution, with examples ranging from micro‑organisms to humans.",
      "The course begins simply with the parts of the guitar, the names of the strings, tuning, and technique—whether finger-style or pick. It then explores the basics of music theory with such topics as scales, triads, power chords, and fingering and shapes."
    ]
  }

}

//Completed Course Class
class CompletedCourses extends Course{
  constructor(){
    super('Course')
    this.grade= [75, 88, 90, 71]
  }

}

//Completed Course Class
class OngoingCourses extends Course{
  constructor(){
    super('Course')
    this.num_of_remaining_seats=[5, 2, 10, 9]
  }
  
  getCourse_id(){
    return this.course_id
  }

  getCourse_name(){
    return this.course_name
  }

  getSeats(){
    return this.num_of_remaining_seats
  }

  getDescription(){
    return this.description
  }
  getDept(){
    return this.department
  }
  

}
const oCourse = new OngoingCourses()

//Student Class
class Student {
  constructor(){
    this.std_id=[1, 2, 3, 4],
    this.std_name=["Jeshon", "Bob", "Calyssa", "Harpreet"],
    this.department=["Language", "Mathematics", "Science", "Music"],
    this.semester =[1, 3, 3, 4],
    this.courses_ongoing = ["French, Italian, Psychology", "Math, Advanced Functions, Calculus", "Biology, Chemistry, Physics", "Music, Choir, Guitar"],
    this.courses_completed = ["Music", "Biology", "Math", "French"]
  }
  getStd_id(){
    return this.std_id
  }

  getStd_name(){
    return this.std_name
  }
  getDepartment(){
    return this.department
  }
  getCourses_ongoing(){
    return this.courses_ongoing
  }
  getCourses_completed(){
    return this.courses_completed
  }
}
const std = new Student()

// -------------------------Routes---------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Students and Courses' });
});

//List of Student and Ongoing/enrolled course
router.get('/list', function(req, res, next){
  res.render('list', {
    std_id: std.getStd_id(),
    std_name: std.getStd_name(),
    department: std.getDepartment(),
    ongoing_course: std.getCourses_ongoing(),
    course_name: oCourse.getCourse_name(),
    seats: oCourse.getSeats(),
    description: oCourse.getDescription(),
    course_id: oCourse.getCourse_id(),
    dept: oCourse.getDept() 


  })
})

//Route for All Students
router.get('/student', function(req, res, next){
  res.render('student', {
    std_id: std.getStd_id(),
    std_name: std.getStd_name(),
    department: std.getDepartment(),
    ongoing_course: std.getCourses_ongoing()
  })
})
router.get('/completedCourse', function(req, res, next){
  res.render('', 
  {
    id: 101,
    name: "Math",
    department: "Mathematics",
    description: "This course enables students to consolidate, and continue to develop, an understanding of mathematical concepts related to number sense and operations, algebra, measurement, geometry, data, probability, and financial literacy.",
    grade: 75
  })
})

// Route for All  Ongoing Courses
router.get('/ongoingCourse', function(req, res, next){
  res.render('ongoingCourse', {
    course_name: oCourse.getCourse_name(),
    seats: oCourse.getSeats(),
    description: oCourse.getDescription(),
    course_id: oCourse.getCourse_id(),
    dept: oCourse.getDept()
  })
})



// Form to Filter Students
router.get('/studentForm', function(req, res, next){
  res.render('formFilterStudent')
})

router.post('/studentForm', function(req, res, next){
  res.render('formFilterStudent')
})

//Form to Filter Course
router.get('/courseForm', function(req, res, next){
  res.render('formFilterCourse')
})

router.post('/courseForm', function(req, res, next){
  res.render('formFilterCourse')
})

module.exports = router;

