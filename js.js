
var number = Math.floor(Math.random()*5)+1;

function changePic()
{
  number++; if(number>5) number=1;
  var file = "<img src=\"img/slides/slide"+number+".jpg\" width=70% height=20%/>";
  document.getElementById("slider").innerHTML = file;

  setTimeout("changePic()", 5000);


}
