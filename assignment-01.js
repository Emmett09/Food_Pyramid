function plusOne(button, limit) {            //increments the numbers
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if(isNaN(value)) value = 0;
  if(limit && value >= limit) return;
  numberInput.innerHTML = value+1;
 
  var currentTriangleLevel = button.parentElement.parentElement.id; 
  
  //determines values to pass to function to change colour of circles based on level and age for increment 
  if(currentTriangleLevel == 'pyramid-level-6') {                                                   
    changeColorBasedOnRDA(numberInput,1000000,1000000,1000000,1000000,0,1000000,value);
  } 
  else if (currentTriangleLevel == 'pyramid-level-5') { 
    changeColorBasedOnRDA(numberInput,0,2,-1,-1,1,10000,value);
  } 
  else if (currentTriangleLevel == 'pyramid-level-4') {
    if(document.getElementById("switch-input").checked){
      changeColorBasedOnRDA(numberInput,0,2,1,5,4,10000,value);
    }else {
      changeColorBasedOnRDA(numberInput,0,2,1,3,2,10000,value);
    }
  }
  else if (currentTriangleLevel == 'pyramid-level-3') {
    changeColorBasedOnRDA(numberInput,0,3,2,4,3,10000,value);
  }
  else if (currentTriangleLevel == 'pyramid-level-2') {
    if(document.getElementById("switch-input").checked){
         changeColorBasedOnRDA(numberInput,0,2,1,6,5,10000,value);
    }else {
        changeColorBasedOnRDA(numberInput,0,3,2,6,5,10000,value);
    }
  }
  else if (currentTriangleLevel == 'pyramid-level-1') {
    if(document.getElementById("switch-input").checked){
         changeColorBasedOnRDA(numberInput,0,3,2,7,6,10000,value);
    }else {
        changeColorBasedOnRDA(numberInput,0,5,4,8,7,10000,value);
    }
  }
/*growShelf();*/ //method call for unfinished method
}  


function minusOne(button) {            //decrements numbers 
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if(isNaN(value)) value = 0;  
  if(value < 1) return;
  numberInput.innerHTML = value-1;  

  var currentTriangleLevel = button.parentElement.parentElement.id; 


  if(currentTriangleLevel == 'pyramid-level-6') {    //passes values to colour change function for decrement
    changeColorBasedOnRDA(numberInput,1000000,1000000,1000000,1000000,0,1000000,value-2);
  } 
  else if (currentTriangleLevel == 'pyramid-level-5') { 
    changeColorBasedOnRDA(numberInput,0,2,-1,-1,1,10000,value-2);
  } 
  else if (currentTriangleLevel == 'pyramid-level-4') {
    if(document.getElementById("switch-input").checked){
      changeColorBasedOnRDA(numberInput,0,2,1,5,4,10000,value-2);
    }else {
      changeColorBasedOnRDA(numberInput,0,2,1,3,2,10000,value-2);
    }
  }
  else if (currentTriangleLevel == 'pyramid-level-3') {
    changeColorBasedOnRDA(numberInput,0,3,2,4,3,10000,value-2);
  }
  else if (currentTriangleLevel == 'pyramid-level-2') {
    if(document.getElementById("switch-input").checked){
         changeColorBasedOnRDA(numberInput,0,2,1,6,5,10000,value-2);
    }else {
        changeColorBasedOnRDA(numberInput,0,3,2,6,5,10000,value-2);
    }
  }
  else if (currentTriangleLevel == 'pyramid-level-1') {
    if(document.getElementById("switch-input").checked){
         changeColorBasedOnRDA(numberInput,0,3,2,7,6,10000,value-2);
    }else {
        changeColorBasedOnRDA(numberInput,0,5,4,8,7,10000,value-2);
    }
  }
}

function isValid(date){     //uses regex to check if date entered in textbox is valid 
  var validate=/^\d{2}\/\d{2}\/\d{4}$/ //Check for format validity
   
if (!validate.test(date))     //creates an alert if invalid 
    alert("Invalid Date Format. Please correct and submit again.")

else{ //Detailed check for valid date ranges
    var day=date.split("/")[0]
    var month=date.split("/")[1]
    var year=date.split("/")[2]
    var fullDate = new Date(year, month-1, day)
    
if ((fullDate.getDate()!=day)||(fullDate.getMonth()+1!=month)||(fullDate.getFullYear()!=year))
    alert("Invalid Date Format")
else
    document.getElementById("printDate").innerHTML  =       document.getElementById("printDate").innerHTML=date;
}

}  

//takes values from increment and decrement and determines circle colour
function changeColorBasedOnRDA(numberInput,oLower,oUpper,gLower,gUpper,rLower,rUpper,value) {  
  var newValue = value+1; 
  if ( newValue >oLower && newValue < oUpper) {
    numberInput.style.backgroundColor="orange";
  }else if (newValue >gLower && newValue < gUpper) {
     numberInput.style.backgroundColor="green";
  }
  else if (newValue > rLower && newValue < rUpper) {
     numberInput.style.backgroundColor="red";
  }else if (newValue ===0 ){
    numberInput.style.backgroundColor="gray";
  }
}

//didnt get function finished to grow and shrink shelf size
/*function growShelf() {
  var currentTriangleLevel = button.parentElement.parentElement.id;
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if(isNaN(value)) value = 0;
  if(limit && value >= limit) return;
  numberInput.innerHTML = value+1;
  if(currentTriangleLevel == 'pyramid-level-6'){
    document.getElementById("pyramid-level-6").style.width = 140*(1+(0.05*value));
  }
}*/