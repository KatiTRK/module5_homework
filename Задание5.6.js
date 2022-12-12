const arr = [1, 2, 3, 4, 5]
let isTrue = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isTrue = false;
	}
}
console.log(isTrue)