var max1=document.getElementById("max1");
var max2=document.getElementById("max2");
var max3=document.getElementById("max3");
var tamil1=document.getElementById("tamil1");
var english1=document.getElementById("english1");
var maths1=document.getElementById("maths1");
var physics1=document.getElementById("physics1");
var chemistry1=document.getElementById("chemistry1");
var biocom1=document.getElementById("biocom1");
var tamil2=document.getElementById("tamil2");
var english2=document.getElementById("english2");
var maths2=document.getElementById("maths2");
var physics2=document.getElementById("physics2");
var chemistry2=document.getElementById("chemistry2");
var biocom2=document.getElementById("biocom2");
var nam=document.getElementById("name");
var email=document.getElementById("email");
var no=document.getElementById("no");
var button=document.getElementById("button");


button.addEventListener("click",function(){
  var avg=(Number(max1.value)+Number(max2.value)+Number(max3.value))*50/300;
  var tamil=Math.round(avg+(Number(tamil1.value)*20/100)+Number(tamil2.value)*3);
  var english=Math.round(avg+(Number(english1.value)*20/100)+Number(english2.value)*3);
  var maths=Math.round(avg+(Number(maths1.value)*20/100)+Number(maths2.value)*3);
  var physics=Math.round(avg+(Number(physics1.value)*20/100)+Number(physics2.value));
  var chemistry=Math.round(avg+(Number(chemistry1.value)*20/100)+Number(chemistry2.value));
  var biocom=Math.round(avg+(Number(biocom1.value)*20/100)+Number(biocom2.value));
  var total=tamil+english+maths+physics+chemistry+biocom;
  if(avg===0){
    alert("Please!, Enter the respective columns");
  }
  else{
  alert("Hello, "+nam.value+"\nYour Score is\nTamil : "+tamil+"\nEnglish : "+english+"\nMaths : "+maths+"\nPhysics : "+physics+"\nChemistry : "+chemistry+"\nBio/Computer : "+biocom+"\nYour Total is "+total);
}

})
