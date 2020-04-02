function validateForm(){
    var returnval=true;
    var email=document.forms['myForm']['femail'].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.femail.value) || /^\d{10}$/.test(myForm.femail.value))
    {
      return (true);
    }
    alert("You have entered an invalid email address or phone number!");
    return (false);

    
    return returnval;
}
function validateForm2(){
  var returnval2=true;
  var f_name=document.forms['myForm2']['fname'].value;
  if(f_name.length < 5){
    alert("Your name length is too short!");
    return (false);

  }
  var s_name=document.forms['myForm2']['sname'].value;
  if(s_name.length < 5){
    alert("Your surname length is too short!");
    return (false);

  }
  
  if ( ( myForm2.gender[0].checked == false ) && ( myForm2.gender[1].checked == false ) && ( myForm2.gender[2].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female or custom" );
   return false;
   }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm2.pemail.value)  || /^\d{10}$/.test(myForm2.pemail.value))
  {
    return (true);
  }
  else{
  alert("You have entered an invalid email address or phone number!");
  return (false);
  } 
  return returnval2;
  

}
                                 
  // var pass=document.forms["myForm2"]["pass"].value;
  // if (pass.length <6 ){
      // alert("*Password atleast 6 characters long!")
      // console.log(pass);
      // return false;
  // }
  
  // var p_wd=document.forms['myForm2']['pwd'].value;
  // if (p_wd.match(/[a-z]/g) && p_wd.match( 
  //   /[A-Z]/g) && p_wd.match( 
  //   /[0-9]/g) && p_wd.length >= 6){
  //       return true;
  //   } 
  //   else{
  //     alert("*Password atleast 6 characters long with atleast a number and a capital lettert!")
  //     return false;
  //   }



