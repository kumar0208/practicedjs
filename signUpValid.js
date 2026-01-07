//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("usernamee").value;
  let pass = document.getElementById("pswd").value;
  let confirmpass = document.getElementById("cpswd").value;
  let mobno = document.getElementById("phnno").value;
  let mailid = document.getElementById("mailid").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let dob = document.getElementById("dobid").value;
  let address = document.getElementById("address").value;
  let day = document.getElementById("dayShift").checked;
  let night = document.getElementById("nightShift").checked;
  let regex = /[a-z][A-Z]/;
  let regexp1 = /[0-9]{10}/;
  //validation logic
  //name
  if (uname == "") {
    alert("Please enter username");
    return false;
  }
  //passwoed
  if (pass == "") {
    alert("please enter password");
    return false;
  }
  //confirm password
  if (confirmpass == "") {
    alert("please re-enter password");
    return false;
  }
  //To fix range of password
  if (pass.length < 8 || pass.length > 12) {
    alert("Password should be minimum 8 and maximum 12 characters");
    return false;
  }
  //To check both are same or not
  if (pass != confirmpass) {
    alert("password and confirm password are not same");
    return false;
  }
  //combination of small and cap letters- starting with small
  if (!regex.test(pass) || !regex.test(confirmpass)) {
    alert("Password should be combination of small and capital letters");
    return false;
  }
  //for phone number
  if (!regexp1.test(mobno)) {
    alert("enter valid mobile number with 10 digits");
    return false;
  }
  //mail id
  if (mailid == "") {
    alert("Enter Email id");
    return false;
  }
  if (!mailid.includes(".com")) {
    alert("Enter valid email");
    return false;
  }
  //gender
  if (gender == "") {
    alert("please select a gender");
    return false;
  }
  //date of birth
  if (dob == "") {
    alert("Choose Date of Birth");
    return false;
  }
  //address
  if (address == "") {
    alert("enter the address");
    return false;
  }
  //shift selection
  if (!day && !night) {
    alert("Please select preferred shift");
    return false;
  }
  return true;
}
