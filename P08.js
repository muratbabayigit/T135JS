//Operatorler

//atama operatörü
let x=12; //x'e 12 değerini atadık
let y=29; //y'ye 29 değerini atadık

//console.log('x='+ x);
//console.log('y='+ y);

y=x //x'in değerini y'ye atamış oluyoruz. y'nin yeni değeri 12
//console.log('y='+ y);

y=28;

//Aritmetik Operatorler
let toplam=x+y;
console.log(toplam);
let fark=y-x;
console.log(fark);
let carpim=x*y;
console.log(carpim);
let bolum=y/x;
console.log(bolum);
let modulus=y%x;
console.log(modulus);


//Karşılaştrma Operatorleri

console.log(y==x); //false
console.log(y!=x); //true
console.log(y>x); //true
console.log(y<x); //false
console.log(y>=x); //true
console.log(y<=x); //false
console.log('---------------------')

// && : bu işaretin her iki tarafındaki koşulunda doğru olması durumudur
let z=12

console.log(x==y && x==z); //false

// ||: bu işaretin iki tarfından koşuldan birinin doğru olmasının yeterli olduğu durumdur
console.log(x==y || x==z); //true

//!: bu işaret önndeki koşulun tersine döndürür
console.log(!(x==y && x==z)); //true


//İşlemli atama Operatoru
// x+=y  bu işlem önce x değerine y değerini ekler(diğer işlemler) ve yeni değeri x'e atar
// Bu durumda x'inyeni değeri x=x+y olacaktır

x+=3;
console.log('x='+x); //x=15
y-=8;
console.log('y='+y); //y=20
z*=3;
console.log('z='+z); //z=36
z/=2;
console.log('z='+z); //z=18
y%=3;
console.log('y='+y); //y=2



