function forclear(){
    document.getElementById("output").innerHTML="0";
}

function removezero()
{
    var value=document.getElementById("output").innerHTML;
    if(value=="0"){
        value=" "
        document.getElementById("output").innerHTML=value;
    }
}
function perc(){
    removezero();
    var value=document.getElementById("output").innerHTML;
    var soln=value/100;
    document.getElementById("output").innerHTML=soln;
}

function calculate(){
    removezero();
    var expression=document.getElementById("output").innerHTML;
    var solved=eval(expression);
    document.getElementById("output").innerHTML=solved;
}
function getexp(value){
    removezero();
    document.getElementById("output").innerHTML+=value;
}


