var femaleNames = ['Ola', 'Kasia', 'Ela', 'Basia'];
var maleNames = ['Marek', 'Piotrek', 'Kuba', 'Tomek', 'Michał'];
var array = femaleNames.concat(maleNames);

console.log(array);

var name = 'Tola';
var indexOfNameInTheArray = array.indexOf(name);

if (indexOfNameInTheArray >= -1) {
	array.push(name);
}

console.log(array); 

// var arrayNew = array.push('Sławek');