"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let perset1 = percent / 100;
	let p = perset1 / 12;

	let credit = amount - contribution;
	let monthlyPayment = credit * (p + (p / (((1 + p) ** countMonths) - 1)));
	let result = monthlyPayment * countMonths;
	let resultCredit = (result).toFixed(2);
	let x = parseFloat(resultCredit);
	return x;
}