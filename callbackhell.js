const studentInfo = () => {
  console.log("studentdetails are");
  setTimeout(() => {
    let rollnos = [1, 2, 3, 4];
    console.log(rollnos);
    setTimeout(
      (roll_no) => {
        const data = {
          sname: "kumar",
          qualification: "Btech",
        };
        console.log(
          `student name is ${data.sname}
         qualification is ${data.qualification} and roll number is ${roll_no}`
        );
      },
      2000,
      rollnos[1]
    );
  }, 2000);
};
studentInfo();
