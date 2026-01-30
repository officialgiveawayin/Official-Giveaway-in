// Loader
window.onload = function(){
document.getElementById("loader").style.display="none";
};

// Countdown
function updateCountdown(){
const end=new Date("February 28, 2026 23:59:59").getTime();
const now=new Date().getTime();
const diff=end-now;

if(diff<0){
document.getElementById("countdown").innerText="GIVEAWAY CLOSED";
return;
}
const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff/(1000*60*60))%24);
const m=Math.floor((diff/(1000*60))%60);
const s=Math.floor((diff/1000)%60);

document.getElementById("countdown").innerText=
`${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown,1000);
updateCountdown();

// Scroll
function scrollToPay(){
document.getElementById("payment").scrollIntoView({behavior:"smooth"});
}

// Modals
function openModal(id){document.getElementById(id).style.display="block";}
function closeModal(id){document.getElementById(id).style.display="none";}

// Theme
function toggleTheme(){
document.body.classList.toggle("light");
}
