

// 1. Дедупликация массива
// function fun(arr){
//     return new Set([...arr])
// }
// console.log(fun([1,2,3,4,1]))
//------------------------------------------------------------

//2. Сортировка массива пузырьком
// let array = [2,3,1,54,222]
//
// function sortFun(arr){
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++){
//         for (let j = 0; j < n-1-i; j++){
//             if (arr[j+1] < arr[j]){
//                 let t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortFun(array))

//---------------------------------------------------------------

// 3.Проверка, что строка является палиндромом

// function check(str){
//     let res = str.toLowerCase().split('').reverse().join('')
//     res === str ? console.log('str is polindrom') : console.log('str is not polindrom');
// }
//
// check('abcasdf')
// check('abcba')

//4. Проверка, что строка является анаграммой другой строки.

// function check(str1, str2){
//     let res1 = str1.toLowerCase().split('').sort().join()
//     let res2= str2.toLowerCase().split('').sort().join()
//    res1 === res2 ? console.log('str1 and str2 is anogram') : console.log('str1 and str2 is not anogram');
// }
//
// check('123Ab','12aB3')
// check('123Abasd','12aB3')

//5. Поиск гласных в строке

// function fun(str){
//     let res = []
//     str = str.toLowerCase()
//     console.log(str)
//     for(let i = 0; i< str.length; i++){
//         if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||  str[i] === 'o' ||  str[i] === 'u' ){
//             res.push(str[i])
//         }
//     }
//     return res
// }
//
// console.log(fun('basadsfgAEjwrtjrqhUbqrtuuuueeeed'))

// 6. Определения числа Фибоначи.
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// function fn(n) {
//     let a = 1,
//         b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// console.log( fn(4) ) // 3
// console.log( fn(7) ) // 13

// 7. Функция геттер, которая спустится по вложенности данных на основе указанного строкой
// ключа через точку (как дойдете до задачи, напишу пример)
//
// let obj = {
//     users: ['Alex', 'Max', 'Ins'],
//     status: true,
//     teacher: {
//         name : 'Vika',
//         age: 23,
//         family: {
//             mother: {
//                 name: 'Sofia',
//                 age: 45
//             },
//             father: {
//                 name: 'Jhon',
//                 age: 24
//             }
//         }
//     }
// }
//
// function getValue(obj, keys ) {
//     const arr = keys.split(".")
//     if (arr[0] === "") arr.shift()
//     let res = obj
//     for (let elem of arr) {
//         res = res[elem]
//     }
//     return res
// }
//
// console.log(getValue(obj, 'teacher.name'))
// console.log(getValue(obj, 'teacher.family.mother.age'))

// Option 2
// function getValue(obj, keys) {
//     let res;
//     res = keys.split('.');
//     res = res.reduce(function(obj1, key1) {
//         return obj1 && obj1[key1];
//     }, obj)
//     return res
// }
//
// console.log(getValue(obj, 'teacher.name')) //Vika
// console.log(getValue(obj, 'teacher.family.mother.age')) // 45

//8. Генерация случайного hex цвета

// function randomHex(){
//     let res = ['#'],
//         r = Math.floor(Math.random() * (256)).toString(16),
//         g = Math.floor(Math.random() * (256)).toString(16),
//         b = Math.floor(Math.random() * (256)).toString(16);
//         res.push(r,g,b)
//     console.log(res.join(''))
// }

// randomHex()
// randomHex()
// randomHex()

//9. Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)

// function fun(str){
//     let res = ['#'];
//     str = str.split('')
//     if(str.length === 4 && str[0] === '#'){
//         for(let i = 1; i< str.length; i++){
//             res.push(str[i])
//             res.push(str[i])
//         }
//     } else return res = 'Please write correct value'
//     return res.join('')
// }
//
// console.log(fun('#05а'))
// console.log(fun('#ccc'))
// console.log(fun('#ccsdc'))
