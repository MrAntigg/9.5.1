//Создание массива Array
var myarray = ['Элемент1', 'Элемент2'];
console.log(myarray);

//Получение длинны массива
console.log(myarray.length);

//Обход массива
myarray.forEach(function(item, index, array) {
  console.log(item, index);
});