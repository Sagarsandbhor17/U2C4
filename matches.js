// write js code here corresponding to matches.html



var matchdata=JSON.parse(localStorage.getItem("schedule"));
var fav=JSON.parse(localStorage.getItem("favourites")) ||  [];
display(matchdata);

document.querySelector("#filterVenue").addEventListener("change",fun2);

function fun2(){var select=document.querySelector("#filterVenue").value;
var filtered=matchdata.filter(function(el){
  return el.ven==select
}) 
display(filtered)}

function display(data){document.querySelector("tbody").innerHTML="";
data.forEach(function(el){
var tr=document.createElement("tr");
var td1=document.createElement("td");td1.innerText=el.mat;
var td2=document.createElement("td");td2.innerText=el.team1;
var td3=document.createElement("td");td3.innerText=el.team2;
var td4=document.createElement("td");td4.innerText=el.dat;
var td5=document.createElement("td");td5.innerText=el.ven;
var td6=document.createElement("td");td6.innerText="Add To Favourites";td6.style.color="green";
td6.style.cursor="pointer";
td6.addEventListener("click",function(){add(el)})
tr.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr);

})

function add(el){
fav.push(el);
localStorage.setItem("favourites",JSON.stringify(fav))
}
}

