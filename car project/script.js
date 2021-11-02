//script.js

$("button").click(function() {
    $('#box').fadeOut(1000);
});

/*---------------------------jQuery Selectors-----------------------*/

//$(function(){
  //$('h1,h2,h3').css('border', 'solid 1px red');  
    
   // $('div#container').css('border', 'solid 1px red'); 
    
    //$('p.lead').css('border', 'solid 1px red'); 
    
   // $('li:first').css('border', 'solid 1px red'); (selects first element in the list)
    
   // $('p:even').css('border', 'solid 1px red'); (selects the paragraphs that are even or you can choose odd below)
    
    //$('p:odd').css('border', 'solid 1px red');
    
    // $('div em').css('border', 'solid 1px red');
    
    // $('div > p').css('border', 'solid 1px red'); (selects p elements that are direct child of div)
    
    // $(':header').css('border', 'solid 1px red');
    
   // $(':contains("Insa")').css('border', 'solid 1px red');

  /*-----------------jQuery Events Method----------------------- */ 
 
$('#box').click(function(){
    alert('you just clicked the box!');
});

$("input").blur(function(){
    if($(this).val()=="") {
       $(this).css('border','solid 1px red');
        $('#box').text('forgot to add text?');
    }
});

$("input").keydown(function() {
    if($(this).val()!==""){
        $(this).css('border','solid 1px #777');
        $('#box').text('Thanks for that!');
    }()
});

$('#box').hover(function() {
              $(this).text('you hovered in!');
}, function() {
     $(this).text('you hovered out!');            
                });


/*--------------jQuery Chaining-----------------*/

$('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();

/*----------------------jQuery HIDE/SHOW-----------------------*/

//$('h1').hide();
//$('div.hidden').show();

//$('div.hidden').fadeIn();

$('#box1').click(function(){
    $(this).fadeTo(1000, 0.25, function(){
        //animation is complete
        $(this).slideUp();
    });
    
});
  $('div.hidden').slideUp();  

$('button').click(function(){
    $('#box1').slideToggle();
    
});


  










    
    
  