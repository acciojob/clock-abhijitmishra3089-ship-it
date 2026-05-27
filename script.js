const time=document.getElementById('timer');
setInterval(function () {
	let now =new Date()
	time.innerText=now.toLocaleString()
},1000)
