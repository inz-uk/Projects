//Script.js

//custom function
function calculateTip() {   


//store the data of inputs 
var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
var numPeople = document.getElementById("totalPeople").value;
    
    //quick validation
    if(billAmount === "" || serviceQuality == 0) {
        return window.alert("Please enter some values to get this baby up and running!");
        //return; this will prevent the function from continuing (you can have it here or at 
        //start of window.alert)
    } 
  //check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <=1) {
      numPeople = 1;
        document.getElementById("each").style.display = "none";   
    } else {
      document.getElementById("each").style.display = "block";  
    }
    
    //DO SOME MATHS!
    
    var total = (billAmount * serviceQuality) / numPeople;
    
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    //display the tip!
   document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}



//HIDE TIP AMOUNT ON LOAD
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick = function(){calculateTip();  }; //you can give it any name I named it calculateTip.
