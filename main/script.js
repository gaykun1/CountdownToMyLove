const birthday='22 Jun 2024';
const daysDisplay = document.querySelector('#days')
const hoursDisplay = document.querySelector('#hours')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

function countDown(){
	const birthdayTime=new  Date(birthday);
	const currentTime= new Date();
	const secondsMain=(birthdayTime-currentTime)/1000;
	const seconds=Math.floor(secondsMain)%60;
	const minutes=Math.floor(secondsMain/60)%60;
	const hours=Math.floor(secondsMain/3600)%24;
	const days=Math.floor(secondsMain/3600/24);
	daysDisplay.innerHTML=days;
	hoursDisplay.innerHTML=formatTime(hours);
	minutesDisplay.innerHTML=formatTime(minutes);
	secondsDisplay.innerHTML=formatTime(seconds);

	
}

function formatTime(time){
	return time<10 ? `0${time}` : time;
}

setInterval(countDown,1000);