//Создайте произвольный массив Map.
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"],
    ["lemon", "yellow"],
    ["orange", "orange"],
    ["banana", "yellow"]
]);

for (let [key, value] of fruits) {
    console.log(`${key} = ${value}`);
  }
