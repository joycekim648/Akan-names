var dayOfTheWeek = function(cc, mm, yy, dd) {
return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
};
var dateOfBirth = prompt("Enter your date of birth(YYYY/MM/DD)");
var cc = parseInt(dateOfBirth.slice(0, 2));
var yy = parseInt(dateOfBirth.slice(2, 4));
var mm = parseInt(dateOfBirth.slice(5, 7));
var dd = parseInt(dateOfBirth.slice(8, 10));
var day = Math.trunc(dayOfTheWeek(cc, mm, yy, dd));
var days = ("sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
var maleNames =("kwasi", "kwadwo", "kwabena", "kwaku", "Yaw", "kofi", "kwame");
var femaleNames = ("akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama" );
if(dd > 31 || dd < 1 || mm >12 || mm < 1) {
  alert("Invalid day of birth!")
} else if (myGender = prompt("Are you male or female?"));
var gender = myGender.toLowerCase()
if (day === 0 && gender === "male") {
  alert("Your Akan name is " + maleNames[0] + ".");
} else if (day === 1 && gender === "male") {
  alert("Your Akan name is " + maleNames[1] + ".");
} else if (day === 2 && gender === "male") {
  alert("Your Akan name is " + maleNames[2] + ".");
} else if (day === 3 && gender === "male") {
  alert("Your Akan name is " + maleNames[3] + ".");
} else if (day === 4 && gender === "male") {
  alert("Your Akan name is " + maleNames[4] + ".");
} else if (day === 5 && gender === "male") {
  alert("Your Akan name is " + maleNames[5] +".");
  }  else if (day === 6 && gender === "male") {
    alert("Your Akan name is " + maleNames[6] + ".");
  } else if (day === 0 && gender === "female") {
    alert("Your Akan name is " + femaleNames[0] + ".");
  } else if (day === 1 && gender === "female") {
    alert("Your Akan name is " + femaleNames[1] + ".");
  } else if (day === 2 && gender === "female") {
    alert("Your Akan name is " + femaleNames[2] + ".");
  } else if (day === 3 && gender === "female") {
    alert("Your Akan name is " + femaleNames[3] +".");
  } else if (day === 4 && gender === "female") {
    alert("Your Akan name is " + femaleNames[4] + ".");
  } else if (day === 5 && gender === "female") {
    alert("Your Akan name is " + femaleNames[5] + ".");
   } else if (day === 6 && gender === "female") {
    alert("Your Akan name is " + femaleNames[6] + ".");
   }
