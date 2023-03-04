// git add .
// git commit -m ''
// git push origin password-generator
randomize.addEventListener("click", function (event) {
  event.preventDefault();
  var length = document.getElementById("length").value;
  validatePassword(length);
});

revealCheckBox.addEventListener("change", function () {
  var password = document.getElementById("inputGen");
  if (revealCheckBox.checked) {
    inputGen.type = "text";
  }
  if (!revealCheckBox.checked) {
    inputGen.type = "password";
  }
});

resetPass.addEventListener("click", function (event) {
  event.preventDefault();
  var inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  revealCheckBox.checked = false;
});

copy.addEventListener("click", function (event) {
  event.preventDefault();
  var generated = document.getElementById("inputGen");
  navigator.clipboard.writeText(generated.value);
  alert("Copied!");
});

function validatePassword(length) {
  var check = true;
  if (isNaN(length) && typeof length !== "number") {
    check = false;
    alert("Please enter a valid number");
  } else if (!(length >= 8)) {
    check = false;
    alert("Please enter a number more than 8");
  }
  if (check == true) {
    generatePassword(length);
  }
}
//Consider setting inputs to empty string if incorrect value is used

function generatePassword(length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var charCode = Math.floor(Math.random() * 95) + 32;
    password += String.fromCharCode(charCode);
  }
  document.getElementById("inputGen").value = password;
}
//TODO: Deploy to Github Page
//Optional: Make design better
//Future: Add nested divs & improve design
