//Koşullu İfadeler

//1-if koşulu

let saat=11;

if(saat<12){
    console.log('Günaydın');
}

//else koşulu: if ya da else-if ile tüm ihtimallerin bitirilmiş olması gerekir
saat=15;
if(saat<12){
    console.log('Günaydın')
}else{
    console.log('iyi Günler')
}

//else-if: birden fazla koşulun sağlanması durumudur
saat=19;

if(saat<12){
    console.log('Günaydın');
}else if(saat>12 && saat<18){
    console.log('İyi Günler');
}else{
    console.log('iyi Geceler');
}