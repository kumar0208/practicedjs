//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("usernamee").value;
  let pass = document.getElementById("pswd").value;

  //validation logic
  if (uname == "") {
    alert("Please enter username");
    return false;
  }
  if (pass == "") {
    alert("please enter password");
    return false;
  }
  return true;
}
