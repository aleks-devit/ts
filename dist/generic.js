"use strict";
// Тут мы задаем прием дженерик типов которые затем принимаеются в аргуементы
// То есть как я понял мы говорим TS что здесь мы будем работатьс некими
// типами T и R, так же мы говорим что эти типы наследуються от
// объектов, тоесть являються типом объекта
// Начинаю подозревать что так и рекомендуется работать с задаванием типовфункци
// И еще как я понял дженерики объявляються перед функциями
// const mergeObjects = <T extends object, R extends object>(a: T, b: R): T & R => {
//     return Object.assign({}, a, b)
// }
//
// const merged = mergeObjects({name: 'Vladilen'}, {age: 26})
//
// // const merged2 = mergeObjects('aaa', 'bbb')
// // console.log(merged.name)
//
// // ===========================================
// // Тут идет демонстрация того что дженерик типы могут наследоваться от
// // не только заготовленных типов но пользовательских интерфейсов
// // ввиду чего полностью преобретать их типизацию (помимо своей уже заданной)
// interface ILength {
//     length: number
// }
//
// const withCount = <T extends ILength>(value: T): {value: T, count: string} => {
//     return {
//         value,
//         count: `In this field ${value.length} symbols`
//     }
// }
// console.log(withCount('Hello TS'))
// ============================================
// Тут демонстрируется пример работы с объектами, где мы можем указывать
// что мы работаем с ключами того или иного объекта
// const getObjectValue = <T extends object, R extends keyof T>(obj: T, key: R) => {
//     return obj[key]
// }
//
// const person = {
//     name: 'Vladilen',
//     age: 26,
//     job: 'JavaScript'
// }
//
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))
// ==========================
// Тут показан пример множественного наследования дженериком
// class Collection <T extends number | string | boolean>{
//     // private _items: T[] = []
//
//     constructor(private _items: T[] = []) {
//     }
//
//     add(item: T) {
//         this._items.push(item)
//     }
//
//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item)
//     }
//
//     get items (): T[] {
//         return this._items
//     }
// }
//
// const strings = new Collection(['I', 'AM', 'STRINGS'])
// strings.add('!')
// strings.remove('AM')
// console.log(strings.items)
//====================================
// Тут мы используем 2 свойства дженериков
// 1. Partial помогает нам объяснить TS что этот объект наследутся
// от определенного интерфейса но в нем может пока не хватать свойсв
//
// 2. Readonly объясняет что массив или объект только для чтения
// interface Car {
//     model: string
//     year: number
// }
//
// const createAndValidateCar = (model: string, year: number): Car => {
//     const car: Partial<Car> = {}
//
//     if (model.length > 3){
//         car.model = model
//     }
//     if (year > 2000){
//         car.year = year
//     }
//
//     return car as Car
// }
//
// ///
//
// const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// // cars.shift()
// // cars[1]
//
// const ford: Readonly<Car> = {
//     model: 'Ford',
//     year: 2000
// }
