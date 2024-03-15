/*
Bir öğrencinin aldığı notu temsil eden bir sayıyı kullanarak, bu notun harf karşılığını belirleyen bir program yazın.
	91 – 100  arası ise    A
    81 – 90    arası ise   B
    71 – 80    arası ise   C	
    61 – 70    arası ise   D	
    60 ve altı ise         F
    o'dan küçük ya da 100'den büyük girerse Hatalı griş yaptınız desin
*/

let ogrNotu=-10;

if(ogrNotu>=91 && ogrNotu<=100){
    console.log(ogrNotu+'\'nun harf karşılığı: A');
}else if(ogrNotu>=81 && ogrNotu<=90){
    console.log(ogrNotu+'\'nun harf karşılığı: B');
}else if(ogrNotu>=71 && ogrNotu<=80){
    console.log(ogrNotu+'\'nun harf karşılığı: C');
}else if(ogrNotu>=61 && ogrNotu<=70){
    console.log(ogrNotu+'\'nun harf karşılığı: D');
}else if(ogrNotu>=0 && ogrNotu<=60){
    console.log(ogrNotu+'\'nun harf karşılığı: F');
}else{
    console.log('Hatalı giriş yaptınız!');
}