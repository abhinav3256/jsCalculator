function display(a){

   b=document.getElementById("display").value;
   if(a=="c"){
    document.getElementById("display").value="";
   }else{
    console.log(b)
    x=b+a
    document.getElementById("display").value=x
   }
  
}

function calculate(){
    b=document.getElementById("display").value;
    console.log(eval(b))
    document.getElementById("display").value=eval(b)
}

