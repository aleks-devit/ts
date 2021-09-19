// // Декораторы работают с классами и сами по себе они являються обычными функциями
// // Декоратор вызывается тогда, когда мы описываем класс
// // constructor = сам класс
// function Log(constructor: Function) {
//     console.log(constructor)
// }
// // Так же мы можем использовать декораторы для свойств класса
// // Он принимает в себя цель (класс) и имя свойства к которому
// // Будет применяться
// function Log2(target: any, propName: string | symbol){
//     console.log(target)
//     console.log(propName)
// }
//
// // Так же мы можем использовать декораторы для методов класса
// // помимо тех же аргументов что и принимает декоратор для свойств
// // этот еще и принимает дескриптор что это разберемся по позже
// function Log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor){
//     console.log(target)
//     console.log(propName)
//     console.log(descriptor)
// }
//
// @Log
// class Component {
//
//     @Log2
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     @Log3
//     get componentName(){
//         return this.name
//     }
//
//     logName(): void{
//         console.log(`Component name: ${this.name}`)
//     }
// }

