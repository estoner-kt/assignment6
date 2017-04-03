//var $ = function(id){
//    return document.getElementById(id); 
//}
//var processEntries = function(){
//    var isValid = true; 
//} 
////var fields = {
////    email: {
////        message:"Must be a valid email adress.",
////        required:"Email is required.", 
////        isEmail: "Email is invalid."
////    }, 
////    first_name: {
////     required:"First name is required",
//// }, 
////    last_name: {
////     required:"Last name is required",
//// },
////     phone: {
////     required:"Phone number is required",
//// }, 
////     zip: {
////     required:"Zip Code is required",
////     message:"Use 5-9 digit Zip Code", 
////     isZip: "Zip Code is invalid"      
//// }, 
////      state: {
////     required:"State is required.",
////      }, 
////    city: {
////        require:"city is required."
////    }  
////}
////
//
//
//
//var validate = function(){
//
//}
//
//validate.prototype.isEmail = function(text){
//    if (text.length === 0) 
//        return false;
//    var parts = text.split("@"); 
//    if (parts.length !==2)
//        return false; 
//    if (parts[0].length >64 )
//        return false; 
//    if (parts[1].length >255 )
//        return false; 
//    
//    
//}
//

//function checkEmail() {
//
//    var email = document.getElementById('email');
//    var filter = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(
//".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA
//-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
//
//    if (!filter.test(email.value)) {
//    alert('Please provide a valid email address');
//    email.focus;
//    return false;
// }
//}


//var button = document.getElementById("submitme"); 
//button.addEventListener("submit", validate); 
//

//function validate(fname){
//    
//    var regex = /^[a-zA-Z ]{2,30}$/;
//    var ctrl =  document.getElemetnById(fname);
//    
//window.alert("hello kate"); 
//    
//    if (regex.test(ctrl.value)) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//var reg = document.getElementById("reg"); 
//var val = document.getElementById("fname"); 
//val.addEventListener("change", validateform, false); 
//
//function validateform(){  
//    
//var name = this.value; 
//    alert("Name can't be blank");  
//if (name==null || name==""){  
// return false;  
//}}; 


window.addEventListener("load", init);

function init() {

 var reg = document.getElementById("reg"); 
 var fname = document.getElementById("fname"); 
 var lname = document.getElementById("lastname");
 var phone = document.getElementById("phone"); 
 var email = document.getElementById("email");
 var zip = document.getElementById("zip"); 
 var state = document.getElementById("state");  
 var city = document.getElementById("city"); 

// window.alert("function init is running");  
 
 fname.addEventListener("change", validateFirstName, false); 
 lname.addEventListener("change", validateLastName, false); 
 phone.addEventListener("change", validatePhone, false); 
 email.addEventListener("change", validateEmail, false); zip.addEventListener("change", validateZip, false);
 state.addEventListener("change", validateState, false);
 city.addEventListener("change", validateCity, false); 

 function validateFirstName(){  
  var fnameValue = this.value; 
  if (fnameValue === null || !/^[A-Za-z][A-Za-z\- ]*$/.test(fnameValue)) {
    window.alert("First Name can't be blank");
  }
 }

 function validateLastName(){  
  var lnameValue = this.value; 
  if (lnameValue === null || !/^[A-Za-z][A-Za-z\- ]*$/.test(lnameValue)) {
    window.alert("Last Name can't be blank");
  }
 }

 function validatePhone(){
  var phoneValue = this.value; 
  if (phoneValue === null || !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneValue)) {
    window.alert("Enter valid phone number");
  }
 }

 function validateEmail(){
  var emailValue = this.value; 
  if (emailValue === null || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)) {
    window.alert("Enter valid email");
  }
 }
    
    function validateZip(){
    var zipValue = this.value; 
    if (zipValue === null || !/^[0-9]{5}(?:-[0-9]{4})?$/.test(zipValue)) {
    window.alert("Enter valid zip code");
  }
 }
  
    function validateState(){
    var zipValue = this.value; 
    if (zipValue === null || !/^(AL|Alabama|alabama|AK|Alaska|alaska|AZ|Arizona|arizona|AR|Arkansas|arkansas|CA|California|california|CO|Colorado|colorado|CT|Connecticut|connecticut|DE|Delaware|delaware|FL|Florida|florida|GA|Georgia|georgia|HI|Hawaii|hawaii|ID|Idaho|idaho|IL|Illinois|illinois|IN|Indiana|indiana|IA|Iowa|iowa|KS|Kansas|kansas|KY|Kentucky|kentucky|LA|Louisiana|louisiana|ME|Maine|maine|MD|Maryland|maryland|MA|Massachusetts|massachusetts|MI|Michigan|michigan|MN|Minnesota|minnesota|MS|Mississippi|mississippi|MO|Missouri|missouri|MT|Montana|montana|NE|Nebraska|nebraska|NV|Nevada|nevada|NH|New Hampshire|new hampshire|NJ|New Jersey|new jersey|NM|New Mexico|new mexico|NY|New York|new york|NC|North Carolina|new carolina|ND|North Dakota|north dakota|OH|Ohio|ohio|OK|Oklahoma|oklahoma|OR|Oregon|oregon|PA|Pennsylvania|pennsylvania|RI|Rhode Island|rhode island|SC|South Carolina|south carolina|SD|South Dakota|south dakota|TN|Tennessee|tennessee|TX|Texas|texas|UT|Utah|utah|VT|Vermont|vermont|VA|Virginia|virginia|WA|Washington|washington|WV|West Virginia|west virginia|WI|Wisconsin|wisconsin|WY|Wyoming|wyoming)$/.test(zipValue)) {
    window.alert("State is nor valid");
  }
 }
    
    function validateCity(){
    var cityValue = this.value; 
    if (cityValue === null || !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(cityValue)) {
    window.alert("Enter valid city");
  }
 }
    
}
