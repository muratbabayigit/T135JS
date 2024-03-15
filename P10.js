//parametresiz fonksiyon

function sayHello(){
    console.log('Merhaba');
}
sayHello();

//parametreli fonksiyon

/**
 * Input must be string variable    
 * This function will print firstname
 * @param {string} firstName 
 */
function printFirstName(firstName){
    console.log(firstName);
}

printFirstName('Ali');



var firstName='Murat';

function printFullName(){
    var lastName='Yiğit'
    console.log(firstName+' '+lastName)
}
printFullName();

console.log('---------------------')
// console.log(firstName+' '+lastName) 
//ifadesideki lastName scope dışında olduğu için yazdırmadı. 

//return 

function toplama(a,b){
    return a*b
}

let sonuc=toplama(12,28);
console.log('Sonuç: '+sonuc);


var fonk=function (firstname){
    console.log('Hakan')
}

fonk();

//ES6 versiyounda fonskiyon oluşturma

var printJob= () => {
    var job='Teacher';
        console.log(job)
}

printJob();
//Sadecce bir fonksiyon import edlirse
// herhang bir dosyadaki bir fonksiyon kullanılacaksa  aşağıdaki formatta fonksiyon import edilir
import { printAge } from "./helper/printHelper.js";

//Fonksiyon çağırlırken paratmetreli ise parametresi girilerek çağırılır
printAge(44)

//Tüm fonksiyonları import ederek kullanımı
// import edilirken fonksiyon ismi yerine * as yazılarak dosya içindeki fonksiyonlara ulaşılır
import * as helper from './helper/printHelper.js'

//oluturulan objemsi nesne ile o dosyadaki fonsiyonlar ulaşılabilir.
helper.printAge(44)
helper.printLastName('Yiğit')