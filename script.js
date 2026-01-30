// Loader
window.onload=()=>{
document.getElementById("loader").style.display="none";
setTimeout(()=>document.getElementById("popup").style.display="block",2000);
};

// Popup
function closePopup(){document.getElementById("popup").style.display="none";}

// Scroll
function scrollToPay(){
document.getElementById("payment").scrollIntoView({behavior:"smooth"});
}

// Countdown
const end=new Date("February 28, 2026 23:59:59").getTime();
setInterval(()=>{
const now=new Date().getTime(),d=end-now;
if(d<0)return;
document.getElementById("countdown").innerText=
`${Math.floor(d/86400000)}d ${Math.floor(d/3600000)%24}h ${Math.floor(d/60000)%60}m`;
},1000);

// Sound click
document.querySelectorAll(".sound-btn").forEach(btn=>{
btn.onclick=()=>document.getElementById("clickSound").play();
});
