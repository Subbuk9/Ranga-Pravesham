
const targetDate = new Date('2026-07-18T15:00:00');

function updateCountdown(){
 const diff = targetDate - new Date();
 if(diff < 0) return;

 const d=Math.floor(diff/86400000);
 const h=Math.floor(diff/3600000)%24;
 const m=Math.floor(diff/60000)%60;
 const s=Math.floor(diff/1000)%60;

 document.getElementById('countdown').innerHTML =
 `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}

setInterval(updateCountdown,1000);
updateCountdown();
