//Arrays

//Boş array oluşturma

let emptyArr=[];

let meyveler=['elma','armut','muz','portakal','mandalina'];

let numaralar=[12,25,36,24,35,18];

console.log(meyveler[2]);
console.log(meyveler.length);

numaralar.push(128);
console.log(numaralar);
console.log(' ');
//let lastNumber=numaralar.pop();
console.log('Silinen Kayıt: '+numaralar.pop());
//numaralar.pop();
console.log(numaralar);
console.log(' ');

console.log('Silinen Kayıt: '+meyveler.shift())
console.log(meyveler);

meyveler.unshift('kivi');
console.log(meyveler)


numaralar.splice(1,0,712)
console.log(numaralar);

numaralar.splice(3,2,886,9716)
console.log(numaralar);

let sebzeler=['domates','fasulye','patlıcan','kabak'];

console.log(meyveler.concat(sebzeler)) 
// yen bir array oluşturmadan iki array birleştilip yazıdırldı.