var greetBox = document.getElementById("typewriter");
var greeting = "Hello.";
var i = 0;
var bool = true;


setInterval(function(){

if(!bool){
 
   
   if(i==0)
   {greetBox.textContent = greetBox.textContent.slice(0,i);
       bool = true;
      return;
     
   }
   greetBox.textContent = greetBox.textContent.slice(0,i);
   --i; 

    
}if(bool){

  
greetBox.textContent = greetBox.textContent + greeting[i];

++i;
if(i==greeting.length)
{
    bool = false;
    i=greeting.length-1;
  
}
} 


},500);