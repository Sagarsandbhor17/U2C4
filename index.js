// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",fun);
  var arr=JSON.parse(localStorage.getItem("schedule"))||[]
  function fun(){
event.preventDefault();
var obj={
mat:masaiForm.matchNum.value,
team1:masaiForm.teamA.value,
team2:masaiForm.teamB.value,
dat:masaiForm.date.value,
ven:masaiForm.venue.value,}
arr.push(obj);
localStorage.setItem("schedule",JSON.stringify(arr))

window.location.href="matches.html"}
