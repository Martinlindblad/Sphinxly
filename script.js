$(document).ready(function () {
 
  $('#name').val(''); // Refresh the input field
    let nameArray = JSON.parse(localStorage.getItem('name'));  // Get names from local storage
  
    if (!nameArray) {                                         
      nameArray = [];  
      
    }                                     
    let hejpa = 'Hejpa';                                        
    let dejpa = 'Dejpa';   
    localStorage.setItem('name', JSON.stringify([...nameArray, dejpa, hejpa]));   // Add Hejpa Dejpa

    // Every value in local storage will be in uppercase[0] otherwise lowercase input won't be recognized
 
    $('#name').keypress(function(e){       // Make Enter trigger the event on button id "click"
      if(e.keyCode==13)
      $('#click').click();
    });
  
  
  let high = window.innerHeight;             // Get screen Size
  let wide = window.innerWidth;
  console.log(high, wide);
  
  $('#graphic').removeAttr('viewBox');
  $('#graphic').each(function () {                // Make every SVG Responsive
    $(this)[0].setAttribute('high', high)
    $(this)[0].setAttribute('width', wide)
    $(this)[0].setAttribute('viewBox', '0 0' + ' ' + high + ' ' + wide) // Change the viewbox values in the svg
  });
  
  $(function(){
    $('#name').bind('input', function(){   // Make sure the user can't do more than 1 space in input field
    $(this).val(function(_, x){
      return x.replace(/\s\s+/g, ' ');
    });
  });
});

function validateName(namn) {      // Validates the name
  namn = $("#name").val();
  console.log(namn);
  let nameVal = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
  return nameVal.test(namn)
}
$('#click').on('click', function () {   // Clicking the button will check the validation of the input field
  if(!validateName()) {
    $('#world').text("Your name dosen't  match the way of the world. Try Again!"); // Will execute if exp: number
  }else{
    $('#world').remove();  // Remove the element while input is valid
    
    $('#click').addClass('inactiveLink');       // Fixed Bug with SVG restarting on click.
  

    let name = $('#name').val();
    name = name.toLowerCase().split(' ');
    
    for (var i = 0; i < name.length; i++) {            
      name[i] = name[i].charAt(0).toUpperCase() + name[i].substring(1);   // Make sure every Value is in the right form    
    }
    name = name.join(' ');                                               // exp: first last |=>| First Last
    
    console.log(name);
    
    
    let nameArray = JSON.parse(localStorage.getItem('name'));  // Get names from local storage
    
    if(nameArray === null){
      nameArray = [];                                         // Create array
          
          localStorage.setItem('name', JSON.stringify([...nameArray, name]));  // Incase local storage is empty
    }
    
    if(nameArray.includes(name)){                            // Check if local storage contains the same input
      $('#add-name').text(name)          
      $('#add-welcome').text('Back To the world')          // if true
    }else{
      $('#add-name').text(name)             
      $('#add-welcome').text('To this world')              // otherwise
      
    }
   
    
                                         
          
          localStorage.setItem('name', JSON.stringify([...nameArray, name])); // Adds The New Name
   
  

        document.getElementById("ani").beginElement();   // Will begin the svg animation 
        $('#click').fadeOut(1000);                       // Custom made animations with jQuery
        $('h1').fadeOut(1000);
        if(wide < 992){
          if($('#name').val().length < 18){
            $('input').stop(true, true).delay(700).animate({fontSize: '7vw'});  // For responsive purpose

          }else{
            $('input').stop(true, true).delay(700).animate({fontSize: '3vw'})
          }
          
        }else{
          $('input').stop(true, true).delay(700).animate({fontSize: '3vw'}); // -||-
          
        }
        



        $('span').delay(4000)                 // Show Welcome message
        .queue(function (next) {
          $(this).addClass('back-ani')
          next()
        });
        
        
        $(".input-container").addClass('input-ani', 1500);
       

        $(".input-container") 
        .delay(1200)
        .animate({
          top: '0%'
        })
        .fadeOut(1000);
        $('#graphic').css('z-index', '100')   // Decide what will happen to svg after Animation
        $('.front')
        .delay(2500)
        .queue(function (next) {
          $(this).css('background', 'none')
          next()
        });    
      }
    });
}); // Ready