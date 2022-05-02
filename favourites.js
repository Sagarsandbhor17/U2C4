// write js code here corresponding to favourites.html


// write js code here corresponding to matches.html



var fave=JSON.parse(localStorage.getItem("favourites")) ||  [];
display(fave);

function display(data){document.querySelector("tbody").innerHTML="";
data.forEach(function(el,index){
var tr=document.createElement("tr");
var td1=document.createElement("td");td1.innerText=el.mat;
var td2=document.createElement("td");td2.innerText=el.team1;
var td3=document.createElement("td");td3.innerText=el.team2;
var td4=document.createElement("td");td4.innerText=el.dat;
var td5=document.createElement("td");td5.innerText=el.ven;
var td6=document.createElement("td");td6.innerText="Delete";td6.style.color="red";
td6.style.cursor="pointer";
td6.addEventListener("click",function(){del(el,index)})
tr.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr);

})

function del(el,index){
fave.splice(index,1)
localStorage.setItem("favourites",JSON.stringify(fave));
window.location.reload();
}
}

