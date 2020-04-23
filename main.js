/******************
 * YOUR CODE HERE *
 ******************/

const Grade = (assignment, score) => {
  return {
    assignment,
    score,
  }
}

const Term = () => {
  return {
    grades: [],

    addGrade: function(assignment, score) {
      const grade = Grade(assignment, score);
      this.grades.push(grade);
    },
  }
}

const Course = (name) => {
  return {
    name,
    terms: [Term()],

    addTerm: function() {
      const term = Term();
      this.terms.push(term);
    }
  }
}

const Student = (name, course, term = 1) => {
  return {
    name,
    course,
    term,
    courses: [Course(course)],

    addCourse: function(course) {
      this.courses.push(Course(course));
      this.course = course;
    },


    getAverage: function(courseToFind = this.course, termIndex = this.term - 1) {
      let foundCourse;
      for (const course of this.courses) {
        if (course.name === courseToFind) {
          foundCourse = course;
        }
      }

      const grades = foundCourse.terms[termIndex].grades;
      if (grades.length === 0) {
        return 'No grades yet.'
      }

      let sum = 0;
      for (const grade of grades) {
        sum += grade.score;
      }

      return sum / grades.length;
    },
  }
}

const students = [];
const addStudent = function(student) {
  students.push(student);
}


const printStudent = function(student) {
  const studentInfo = document.createElement('ul');
  const nameItem = document.createElement('li');
  const courseItem = document.createElement('li');
  const termItem = document.createElement('li');
  const newStuffButton = document.createElement('button');
  const gradeInput = document.createElement('input');
  const average = document.createElement('label');
  
  average.innerText = `Average: `
  nameItem.innerText = `Name: ${student.name}`;
  courseItem.innerText = `Course: ${student.course}`;
  termItem.innerText = `Term: ${student.term}`;
  newStuffButton.innerText = `Add grade.`

  newStuffButton.classList.add('new-grade-button');
  gradeInput.classList.add('grade-input-box');
  studentInfo.classList.add('student-info');
  studentInfo.appendChild(nameItem);
  studentInfo.appendChild(courseItem);
  studentInfo.appendChild(termItem);

  newStuffButton.addEventListener('click', function(){
    const newGrade = gradeInput.value
    
    let student = student[0].course[0].term.addGrade(newGrade)
      
      addStudent(student);
      printStudent(student)
    })

  document.querySelector('.student-display').appendChild(studentInfo);
  document.querySelector('.student-display').appendChild(newStuffButton);
  document.querySelector('.student-display').appendChild(gradeInput);
  document.querySelector('.student-display').appendChild(average);


}


const printStudents = function(students) {
  for (const student of students) {
    printStudent(student);
  }
}
document.querySelector(".new-student-button").addEventListener('click', function(){
  const nameWritten = document.querySelector(".new-student-name").value;
  const courseWritten = document.querySelector(".new-student-course").value;
  const termSelected = document.querySelector(".new-student-term").value;
  let student = Student(nameWritten, courseWritten, termSelected)
    
    addStudent(student);
    printStudent(student)
  })
  
  // document.querySelector(".new-student-button").addEventListener('click', function()