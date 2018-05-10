/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn, _this) {
    for(let i = 0; i < array.length; i++){
        fn.apply(_this, [array[i], i, array]);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(fn(array[i], i, array));
    }
    return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let i = !initial ? 1 : 0;
    initial = initial || array[0];
    for(; i < array.length; i++){
        initial = fn(initial, array[i], i, array);
    }
    return initial;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [];
    for(let key in obj){
        arr.push(key.toLocaleUpperCase());
    }
    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let arr = [];

    if(from < 0){
        from = (array.length - 1) + from;
        if(from < 0){
            from = 0;
        }
    }

    if(to < 0){
        to = array.length + to;
        if(to < 0){
            to = 0;
        }
    }
    if(to > array.length){
        to = array.length;
    }

    while(from < to){
        arr.push(array[from]);
        from++;
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(target, prop, val){
            target[prop] = val * val;
            return true;
        }
    });
    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
