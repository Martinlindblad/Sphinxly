$(document).ready(function() {

  let btn = $('#click');
  let input = $('.input-container');
  let overlay = $('#svg-morph');
  console.log(overlay);
  
  let ani = anime({
    targets: '#svg-morph',
    d:[
      {
        value: 'M0,0H1180c102.333,0,270.2,2.115,366.666,0,209,2,377.669,0,377.669,0H0Z'
      },{
        value: 'M0,0V1082.334H1070c102.333,2,252.538,2.115,349,0,209,2,505.331,0,505.331,0V0Z'
      }
    ],
    easing: 'easeinOutQuint',
    duration: 1500,
    loop: false,
    // autoplay: false,
    
  });
  console.log(anime());
  
}); // Ready