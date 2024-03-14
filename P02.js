//Variables and Constants

let name='Murat'; //Sadece tanımlandığı scope içinde kullanılabilien değişken
console.log('isim1:'+name)

var firstName='Hakan'; //Global bir değişken
console.log('İsim2:'+firstName)

const pi=3.14;
console.log('pi sayısı= '+pi)


name='Tarık';
firstName='Sena';
var age=14;
//pi=3;

console.log('Yeni isim1: '+name) // Yeni isim1: Tarık
console.log('Yeni isim2: '+firstName) //Yeni isim2: Sena
console.log('Yaş: '+age)
console.log('pi sayısı: '+pi) // pi sayısı: 3.14


/*
Değişken isimleri a..z ve A...Z gibi harflerle başlayabilir, _ veya $ işareti de kullanılbilir.
Rakamla başlayamaz ama içinde rakam kullanılabilir
İsimler Case Sensitive'dir. myname, Myname,MyName,myName birbirnden farklı değişkenlere kaşılık gelir.
Bu nedenle camelCase yazım metodolojisi tercih edilir

if,for,while, else gibi anahtar kelimelr değişken adı yapılamaz
*/
