let incrementByClick=0;
let incrementFromInput=0;

function increment()
{

  /*incrementByClick=incrementByClick+10;
  document.getElementById("count-el").innerHTML=incrementByClick;*/

  incrementFromInput=document.getElementById("incrementFromInput").value;
  document.getElementById("count-el").innerHTML=incrementFromInput;

}

