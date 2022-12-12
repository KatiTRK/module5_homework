//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 2, 3, 4, 5, 6, 7, "Morning", null, "5"];
let evenNumbers = 0;
let oddNumbers = 0;
let otherNumbers = 0;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0 || (typeof (arr[i]) !== 'number')){
        otherNumbers++;
    } else {
        if (arr[i] % 2 === 0) {
            evenNumbers++;
    } else {
        oddNumbers++;
    }
}
}

console.log('Количество четных чисел ' + evenNumbers)
console.log('Количество нечетных чисел ' + oddNumbers)
console.log('Другие элементы ' + otherNumbers)