 $('#left').click(function() {
    $('.box').animate({
        left: "-=40px",
        fontSize:"+=2px"
    }, function() {
    });
});



 $('#up').click(function() {
    $('.box').animate({
        top: "-=40px",
        opacity: "+=0.1"
    }, function() {
    });
});



 $('#right').click(function() {
    $('.box').animate({
       left: "+=40px",
        fontSize:"-=2px"
        
    }, function() {
    });
});



 $('#down').click(function() {
    $('.box').animate({
        top: "+=40px",
         opacity: "-=0.1"
    }, function() {
    });
});

//jquery/css 

$('#circle2').css({'background':'#8a8d22',
                   'display':'inline-block',
                   'color':'white',
                   'text-align':'center',
                   'line-height':'140px',
                   'width':'140px',
                   'margin':'40px'
                  }).addClass('circleShape');

$('#circle2').addClass('circleShape');

/ script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Brad")').css('border','solid 1px red');
    
    /* --------------------
       jQUERY EVENT METHODS
       -------------------- */
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });
    
     /* --------------------
       jQUERY Car Racr 2.0
       -------------------- */
    
 // jQuery Car Racr 2.0

//click the GO button

$('#go').click(function() {
    
    //build a function that checks to see if a car has won the race
    function checkIfcomplete() {
        
        if( isComplete == false ) {
            isComplete = true;
           } else {
               place = 'second';
               
           }
    }
    
    
    //get the width of the cars
    var carWidth = $('#car1').width();
    
    //get the width of the race track
    var raceTrackWidth = $(window).width() - carWidth;
                           
   //generate a random number # between 1 and 5000
    var raceTime1 = Math.floor( (Math.random() * 5000) + 1);  
    var raceTime2 = Math.floor( (Math.random() * 5000) + 1);  
    
    //set a flag variable to False by default
    
    var isComplete = false;
    
    //set a flag variable to First by default
    var place = 'first';
    
    //animate car 1
    $('#car1').animate({
        
        //move the car width of the racetrack
        left: raceTrackWidth
        
    }, raceTime1, function() {
        
        //animation is complete
        
        //run a function
        checkIfcomplete();
        
        // give some text feedback in the race info box
        $('#raceInfo1 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime1 + 'milliseconds!' );
        
    });
    
   
    
      //animate car 2
    $('#car2').animate({
        
        //move the car width of the racetrack
        left: raceTrackWidth
        
    }, raceTime2, function() {
        
        //animation is complete
        
        //run a function
        checkIfcomplete();
        
        // give some text feedback in the race info box
        $('#raceInfo2 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime2 + 'milliseconds!' );
        
    });
    
});
    
    //reset the race
    $('#reset').click(function() {
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    });









