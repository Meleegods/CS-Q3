
    var person = prompt("Please enter your first name:", "");
    if (person == null || person == "") {
        alert("No name detected. Name will default to Your Name Here");
      } else {    document.getElementById("fname").innerHTML = person;}
      var gender = prompt("Please enter your gender (M/F):", "");
          if ( gender == "F" || gender == "M") {    document.getElementById("gender").innerHTML = gender;}
        else { 
            alert("No gender detected. The gender posted will default to M/F.");}
        var username = prompt("Please enter your username:", "");
      if (username == null || username == "" ) {
        alert("No username detected. The username posted will default to @username");
        } else {    document.getElementById("username").innerHTML = username;}
        var desc = prompt("Describe yourself!:", "");
      if (desc == null || desc == "" ) {
          alert("No description detected. The description will be set to the default.");
        }  {    document.getElementById("desc").innerHTML = desc;}
        var year = prompt("What year were you born?:", "");
      if (year == null || year == "" ){alert("No year detected. The year will default to 2XXX");}
      else {document.getElementById("year").innerHTML = year;}
        var age = prompt("How old are you?:", "");
     if (age == null || age == "" )  {alert("No age detected. The age will default to XX");} 
         else  {document.getElementById("age").innerHTML = age;}
        var pfp = prompt("Would you like a custom profile pictur? (Y/N):", "");
      if (pfp == "Y" ){alert("Profile pic selected");document.getElementById("ppic").src="cry.png";}
      if ( pfp == "N") {alert("No profile pic selected");}
      else {document.getElementById("year").innerHTML = year;}




    
    