/* 
Project:  Explore 2-1
Author:
Date:
Purpose:  Explore the creation of a basic function to calculate BMI
*/

 function calcBMI(){
   var height = document.getElementById("height").value;
   var weight = document.getElementById("weight").value;
   var BMI = 0;
   
   BMI = (weight/height**2)*703;
   var message = "Your BMI is " + BMI.toFixed(2);
   
   BMI!=NaN && BMI> 0? alert(message): alert("Error, please check your entries")
   
 }

document.getElementById("Sbutton").addEventListener("click", calcBMI);