//1.......................
//call method
const productinfo = {
  productdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const productdata = {
  pid: 1001,
  pname: "samsung",
};
console.log(productinfo.productdetails.call(productdata, 4, 30000));

//2.....................................

//call method
const productinfo = {
  productdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const productdata = {
  pid: 1001,
  pname: "samsung",
};
console.log(productinfo.productdetails.call(productdata, 4, 30000));

//3.....................

// apply method demo
const studentinfo = {
  studentdetails: function (qualification, branch) {
    return this.rollno + " " + this.sname + " " + qualification + " " + branch;
  },
};
const student = {
  rollno: 12434,
  sname: "Santhosh",
};
console.log(studentinfo.studentdetails.apply(student, ["btech", "CSE"]));
