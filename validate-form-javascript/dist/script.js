/**
 * Script
 */

;( function( w ) {
    'use strict';

    /**
     * Validate form here
     *
     */

    window.onload = () => {
        console.log( 'Browser load complete!' );
    }
    
} ) ( window )
function checkform(){
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    event.preventDefault();
   if(fullname== "" || username=="" || !filter.test(email) || password == "" || password != confirmpassword){
        if(fullname== ""){
            document.getElementById('error-fullname').innerHTML="Please enter your full name" ;  
        }else{
            document.getElementById('error-fullname').innerHTML=" " ; 
        }

        if(username== ""){
            document.getElementById('error-username').innerHTML="Please enter your username" ;  
        }else{
            document.getElementById('error-username').innerHTML=" " ; 
        }

        if(!filter.test(email)){
            document.getElementById('error-email').innerHTML="Email address is not valid" ;  
        }else{
            document.getElementById('error-email').innerHTML=" " ; 
        }

        if(password== ""){
            document.getElementById('error-password').innerHTML="Please enter your password" ;  
        }else{
            document.getElementById('error-password').innerHTML=" " ; 
        }

        if(password != confirmpassword){
            document.getElementById('error-confirmpassword').innerHTML="Please check your password" ;  
        }else{
            document.getElementById('error-confirmpassword').innerHTML=" " ; 
        }

         document.getElementById('error-signup').innerHTML="Please complete all information" ;
   }else{
        window.alert('You have registered an account'); 
    }
}