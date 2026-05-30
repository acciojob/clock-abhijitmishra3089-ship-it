// const time=document.getElementById('timer');
// 	setInterval(function () {
// 	let now =new Date()
// 	time.innerText=now.toLocaleString()
// },1000)
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    timer.textContent = now.toLocaleString();
}

updateTimer(); 
setInterval(updateTimer, 1000);