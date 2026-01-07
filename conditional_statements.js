//marks grading using if else
let marks = 90;
if (marks > 90) {
  console.log("Grade:S");
} else if (marks <= 90 && marks >= 80) {
  console.log("Grade:A");
} else if (marks < 80 && marks >= 70) {
  console.log("Grade:B");
} else if (marks < 70 && marks >= 60) {
  console.log("Grade:C");
} else {
  console.log("Fail");
}
