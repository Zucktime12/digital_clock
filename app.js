function digiClock() {
	const fullDate = new Date();
	// console.log(fullDate);
	let hours = fullDate.getHours();
	let mins = fullDate.getMinutes();
	let secs = fullDate.getSeconds();
	// console.log(fullDate.getHours());
	// console.log(fullDate.getMinutes());
	// console.log(fullDate.getSeconds());

	if (hours > 12) {
		hours = hours - 12;
	} 

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}

	// console.log(document.getElementById('hour'));
	// console.log(document.getElementById('minute'));
	// console.log(document.getElementById('second'));

	document.getElementById('hour').innerHTML = hours + " : ";
	document.getElementById('minute').innerHTML = mins + " : ";
	document.getElementById('second').innerHTML = secs;



}

setInterval(digiClock, 1000); 