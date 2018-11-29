function digiClock() {
	const fullDate = new Date();
	// console.log(fullDate);
	let hours = fullDate.getHours();
	const mins = fullDate.getMinutes();
	const secs = fullDate.getSeconds();
	// console.log(fullDate.getHours());
	// console.log(fullDate.getMinutes());
	// console.log(fullDate.getSeconds());

	if (hours > 12) {
		hours = hours - 12;
	} else {
		return
	}

	// console.log(document.getElementById('hour'));
	// console.log(document.getElementById('minute'));
	// console.log(document.getElementById('second'));

	document.getElementById('hour').innerHTML = hours + " : ";
	document.getElementById('minute').innerHTML = mins + " : ";
	document.getElementById('second').innerHTML = secs;



}

setInterval(digiClock, 1000); 