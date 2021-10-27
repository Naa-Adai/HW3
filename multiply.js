function myFunction() {
var firstNum =  document.getElementById("firstNum").value;
var secondNum =  document.getElementById("secondNum").value;
var thirdNum =  document.getElementById("thirdNum").value;
var forthNum =  document.getElementById("forthNum").value;

var value = 0;
var output = document.getElementById("output");
var table = "";

if(isNaN(firstNum)){
    document.getElementById("1n").innerHTML = 'Please enter a valid number for Starting Vertical Number';
    document.getElementById("1n").style.color = "red";
}

    if(isNaN(secondNum)){
    document.getElementById("2n").innerHTML = 'Please enter a valid number for Ending Vertical Number';
    document.getElementById("2n").style.color = "red";
}
    
    if(isNaN(thirdNum)){
    document.getElementById("3n").innerHTML = 'Please enter a valid number for Starting Horizontal Number';
    document.getElementById("3n").style.color = "red";
}
    
    if(isNaN(forthNum)){
    document.getElementById("4n").innerHTML = 'Please enter a valid number for Starting Horizontal Number';
    document.getElementById("4n").style.color = "red";
}

try{
for(var i = firstNum-1; i <= secondNum; i++){
    table += "<tr>";
    for(var j = thirdNum; j <= forthNum; j++){
        if(i== firstNum-1 && j == thirdNum){
            table += "<th>x</th>";
        }
        if(i==firstNum-1){
            table += "<th>" + j + "</th>";
        } else if (j == thirdNum){
            table += "<th>" + i + "</th>";
        }else if(j == forthNum){
            table += "<td>" + i * (j-1) + "</td>";
            table += "<td>" + i * j + "</td>";
        }else{
        table += "<td>" + i * (j-1) + "</td>";
        }
    }
    table += "</tr>";
}
}

catch (e) {
  document.getElementById("button").innerHTML = 'Something went wrong: ' + e;
}

output.innerHTML = table;

}
