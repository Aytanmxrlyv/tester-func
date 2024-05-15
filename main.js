
// function checkStudent(student){
// if(
//     student.slice(-1)=="A" ||  student.slice(-1)=="B")
//     {
//         console.log("dusur");}
// else{
//     console.log("dusmur");   
// }
// }
// checkStudent("vusalA")

function perimetr(){
var a=parseFloat(document.getElementById("en").value);
var b=parseFloat(document.getElementById("uzunluq").value);
var perimetr =2*(a+b);
    document.getElementById("netice").innerHTML=perimetr;
}

function sahe(){
var a=parseFloat(document.getElementById("en").value);
var b=parseFloat(document.getElementById("uzunluq").value);
var sahe =a*b;
    document.getElementById("netice").innerHTML=sahe;
}





