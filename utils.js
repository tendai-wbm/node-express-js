function generateRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function square(number) {
	return number**2;
}

module.exports = {
		   generateRandomNumber,
		   square
		 };
