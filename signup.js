function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pin = document.getElementById("PIN").value;
  let address = document.getElementById("address").value;
  let data = JSON.stringify({ name, email, phone, pin, address });
  if (name == "") {
    document.getElementById("errorname").innerHTML = "*Name cannot be empty";
    //alert("Name cannot be empty")
  }
  // else if(!name.match(/^[a-zA-Z' ']*$/)){
  //     //alert("Invalid name")
  //     document.getElementById("errorname").innerHTML = "*Please enter a valid name";
  // }
  else {
    document.getElementById("errorname").innerHTML = "";
  }
  if (email == "") {
    document.getElementById("errormail").innerHTML = "*Email cannot be empty";
    //alert("Email cannot be empty")
  } else if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("errormail").innerHTML =
      "*Please enter a valid email address";
    //alert("Enter a valid email address")
  } else {
    document.getElementById("errormail").innerHTML = "";
  }
  if (phone == "") {
    document.getElementById("errorphone").innerHTML =
      "*Phone number cannot be empty";
    //alert("Phone number cannot be empty")
  } else if (isNaN(phone) || phone.length != 10) {
    document.getElementById("errorphone").innerHTML =
      "*Please enter a valid phone number";
    //alert("Phone number not valid")
  } else {
    document.getElementById("errorphone").innerHTML = "";
  }
  //   if (pin == "") {
  //     document.getElementById("errorpin").innerHTML = "";
  //alert("Pincode not valid")
  if (pin.length > 0 && pin.length < 6) {
    document.getElementById("errorpin").innerHTML =
      "Please enter a valid pincode";
  } else {
    document.getElementById("errorpin").innerHTML = "";
  }

  if (
    name == "" ||
    email == "" ||
    !email.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) ||
    phone == "" ||
    isNaN(phone) ||
    phone.length != 10
    // isNaN(pin) ||
    // pin == "" ||
    // pin.length != 6 ||
    // address == ""
  ) {
    data = null;
  }

  data.length ? alert(data) : !alert();
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// function validation() {
//     if (document.myForm.name.value == "") {
//         alert("Enter a name");
//         document.myForm.name.focus();
//         return false;
//     }
//     if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
//         alert("Invalid characters");
//         document.myForm.name.focus();
//         return false;
//     }
// }
