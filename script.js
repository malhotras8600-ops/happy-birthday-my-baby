function showMessage(){

document.getElementById("surprise").style.display="block";

}
for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="?";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

document.body.appendChild(heart);

}
const startDate=
new Date("2024-08-29");

function updateDays(){

const today=new Date();

const diff=today-startDate;

const days=Math.floor(
diff/(1000*60*60*24)
);

document.getElementById(
"daysTogether"
).innerHTML=

days+" Days Together ??";

}

updateDays();