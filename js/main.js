
//Hide all images.
$("#showcase li").hide();
  slideNr = 1;

//Show first image with id #slide1;
$("#slide1").show();

//click to slide image forward.
function forward(){
  slideNr = slideNr +1;
  if(slideNr >4){
    slideNr = 1;
  }

  $("#showcase li").hide();
  $("#slide" + slideNr).show();
}

//click to slide image backward.
function backward(){
  slideNr = slideNr -1;
  if(slideNr == 0){
    slideNr = 4;
  }

  $("#showcase li").hide();
  $("#slide" + slideNr).show();
}

//check the checkbox to autoslide all images And uncheck to stop autoslide.
function Checkautoslide(){
  if($("#autoslide").prop("checked") == true){
   Autoplay = setInterval(function(){
         forward();
   }, 2000);
  }
  else{
    clearInterval(Autoplay);
  }
}


//Subscribe Newsletter Validation.
function checkSubEmail(){
  var Email = document.getElementById("sub-email").value;
  var Emailchecked = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!Emailchecked.test(Email) && Email!="") {

      document.getElementById("subemail-error").style.display = "block";
      document.getElementById("subemail-error").innerHTML= "Enter a valid Email.";
      document.getElementById("subemail-error").style.color = "red";
      document.getElementById("sub-email").focus();

 return false;
}
else if (Email == ""){
      document.getElementById('subemail-error').style.display = 'block';
      document.getElementById("subemail-error").innerHTML = 'Please enter an email.';
      document.getElementById("subemail-error").style.color = "red";
      document.getElementById("sub-email"). focus();
      
 return false;
}
else{
 document.getElementById("subemail-error").style.display = "block";
 document.getElementById("subemail-error").innerHTML = "You entered a valid email";
 document.getElementById("subemail-error").style.color = "green";

 return true; 
}

}

function validateSubemail(){
  var validateEmail = checkSubEmail();

  if(validateEmail == true){

    location.href="index.html";
  }
  else{
    return false;
  }
}

//Sign up validation
function checkName(){
  var unameValue = document.getElementById("user-name").value;

if (unameValue == "" || unameValue.length <=3) {
    document.getElementById("error-name").style.display = "block";
    document.getElementById("error-name").innerHTML = "Enter full names and of more than 3 characters.";
    document.getElementById("error-name").style.color = "red";
    document.getElementById("name-label").style.color = "red";
    document.getElementById("user-name").focus();

   return false;

}
else{
      document.getElementById("error-name").style.display = "block";
      document.getElementById("error-name").innerHTML = "You entered a valid name.";
      document.getElementById("error-name").style.color = "green";
      document.getElementById("name-label").style.color = "green";

      return true;
  } 

}


function checkPhonenr(){
  var Phonenr = document.getElementById("user-number").value;
   if(Phonenr.length == 0){
       document.getElementById("error-phonenumber").style.display = "block";
       document.getElementById("error-phonenumber").innerHTML = "Please provide a telephone number";
       document.getElementById("error-phonenumber").style.color = "red";
       document.getElementById("number-label").style.color = "red";
       document.getElementById("user-number").focus();

       return false;    
   } 
   else if(!Phonenr.match(/^[0-9]{11}$/)){
      document.getElementById("error-phonenumber").style.display = "block";
      document.getElementById("error-phonenumber").innerHTML = "Please provide a valid telephone number and of 11 digits only";
      document.getElementById("error-phonenumber").style.color = "red";
      document.getElementById("number-label").style.color = "red";
      document.getElementById("user-number").focus();

      
      return false;    
  }
  else{
      document.getElementById("error-phonenumber").style.display = "block";
      document.getElementById("error-phonenumber").innerHTML = "You entered a correct telephone number";
      document.getElementById("error-phonenumber").style.color = "green";
      document.getElementById("number-label").style.color = "green";

      return true;
  }
  
}

function checkEmail(){
  var Email = document.getElementById("user-email").value;
  var Emailchecked = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!Emailchecked.test(Email) && Email!="") {

      document.getElementById("error-email").style.display = "block";
      document.getElementById("error-email").innerHTML= "Enter a valid Email.";
      document.getElementById("error-email").style.color = "red";
      document.getElementById("email-label").style.color = "red";
      document.getElementById("user-email").focus();

 return false;
}
else if (Email == ""){
      document.getElementById('error-email').style.display = 'block';
      document.getElementById("error-email").innerHTML = 'Please enter an email.';
      document.getElementById("error-email").style.color = "red";
      document.getElementById("email-label").style.color = "red";
      document.getElementById("user-email"). focus();
      
 return false;
}
else{
 document.getElementById("error-email").style.display = "block";
 document.getElementById("error-email").innerHTML = "You entered valid email";
 document.getElementById("error-email").style.color = "green";
 document.getElementById("email-label").style.color = "green";

 return true; 
}

}

function checkPassword(){
  var Password = document.getElementById("user-password").value;
  var Passwordcheck = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
   if(Password == ""){
       document.getElementById("error-password").style.display = "block";
       document.getElementById("error-password").innerHTML = "Please enter your password";
       document.getElementById("error-password").style.color = "red";
       document.getElementById("password-label").style.color = "red";
       document.getElementById("user-password").focus();

       return false;
   }
   else if(!Password.match(Passwordcheck)){
      document.getElementById("error-password").style.display = "block";
      document.getElementById("error-password").innerHTML = "Password must be atleast 8 characters including atleast a digit, lowercase, uppercase";
      document.getElementById("error-password").style.color = "red";
      document.getElementById("password-label").style.color = "red";
      document.getElementById("user-password").focus();

       return false;
   }
   else{
      document.getElementById("error-password").style.display = "block";
      document.getElementById("error-password").innerHTML = "You entered valid password";
      document.getElementById("error-password").style.color = "green";
      document.getElementById("password-label").style.color = "green";
   
      return true; 
   }
}

function checkCourse(){
  var studyCourse = document.getElementById("StudyId").value;
  
  if(studyCourse == "noPet"){
     document.getElementById("error-course").style.display = "block";
     document.getElementById("error-course").innerHTML = "You must select a course you want to study.";
     document.getElementById("error-course").style.color = "red";
     document.getElementById("select-text").style.color = "red";

     return false;
  }
  else {
      document.getElementById("error-course").style.display = "block";
      document.getElementById("error-course").innerHTML = "You have selected a course you want to study.";
      document.getElementById("error-course").style.color = "green";
      document.getElementById("select-text").style.color = "green";

      return true;
  }
}

function validateForm(){
      var validateName = checkName();
      var validatePhoneNr = checkPhonenr();
      var validateEmail = checkEmail();
      var validatePassword = checkPassword();
      var validateCourse = checkCourse();

      if(validateName == true && validatePhoneNr == true && validateEmail == true && validatePassword == true && validateCourse == true){

        location.href="about.html";
      }
      else{
        return false;
      }
}


//Get a Quote validation.
function checkName(){
  var unameValue = document.getElementById("user-name").value;

if (unameValue == "" || unameValue.length <=3) {
    document.getElementById("error-name").style.display = "block";
    document.getElementById("error-name").innerHTML = "Enter full names and of more than 3 characters.";
    document.getElementById("error-name").style.color = "red";
    document.getElementById("name-label").style.color = "red";
    document.getElementById("user-name").focus();

   return false;

}
else{
      document.getElementById("error-name").style.display = "block";
      document.getElementById("error-name").innerHTML = "You entered a valid name.";
      document.getElementById("error-name").style.color = "green";
      document.getElementById("name-label").style.color = "green";

      return true;
  } 

}

function checkEmail(){
  var Email = document.getElementById("user-email").value;
  var Emailchecked = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!Emailchecked.test(Email) && Email!="") {

      document.getElementById("error-email").style.display = "block";
      document.getElementById("error-email").innerHTML= "Enter a valid Email.";
      document.getElementById("error-email").style.color = "red";
      document.getElementById("email-label").style.color = "red";
      document.getElementById("user-email").focus();

 return false;
}
else if (Email == ""){
      document.getElementById('error-email').style.display = 'block';
      document.getElementById("error-email").innerHTML = 'Please enter an email.';
      document.getElementById("error-email").style.color = "red";
      document.getElementById("email-label").style.color = "red";
      document.getElementById("user-email"). focus();
      
 return false;
}
else{
 document.getElementById("error-email").style.display = "block";
 document.getElementById("error-email").innerHTML = "You entered valid email";
 document.getElementById("error-email").style.color = "green";
 document.getElementById("email-label").style.color = "green";

 return true; 
}

}

function checkMessage(){
  var textMessage = document.getElementById("user-mssg").value;

if (textMessage.length < 100 || textMessage.length > 300 || textMessage == "") {
document.getElementById("error-message").style.display = "block";  
document.getElementById("error-message").innerHTML = "Enter text of more than 100 and less than 300 characters.";
document.getElementById("error-message").style.color = "red";
document.getElementById("message-label").style.color = "red";
document.getElementById("user-mssg").focus();
return false;

}
else{
  document.getElementById("error-message").style.display = "block";
  document.getElementById("error-message").innerHTML = "You are within the valid character range";
  document.getElementById("error-message").style.color = "green";
  document.getElementById("message-label").style.color = "green";
 
  return true; 
 }

}

function validateQuote(){
  var validateName = checkName();
  var validateEmail = checkEmail();
  var validateMessage = checkMessage();

  if(validateName == true && validateEmail == true && validateMessagen == true){

    return true;    
    }
    else{
      return false;
    }
}

//thumnail image gallery.
var images = document.getElementById("myDiv").getElementsByTagName("img");

for(var i = 0; i < images.length; i++){
  images[i].onmouseover = function(){
    this.style.cursor = "hand";
    this.style.borderColor = "red";
  }
  images[i].onmouseout = function(){
    this.style.cursor = "pointer";
    this.style.borderColor = "grey";
  }
}
function changeImage(event){
    event = event || window.event;

    var targetElement = event.target || event.srcElement;

  if (targetElement.tagName == "IMG"){
}
   document.getElementById("mainImage").src  = targetElement.getAttribute("src");
}