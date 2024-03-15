//Döngüler
//for Döngüsü

for (let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}


//while döngüsü
console.log('--------------')
let i=50;
while(i<=100){
    if(i%2==0){
        console.log(i);
    }
    i+=5;
}


//switch - case Döngüsü
let meyve='kiraz';

switch(meyve){
    case 'elma':
    case 'armut':
        console.log(meyve+ ' bir Yaz meyvesidir')
        break;
    case 'portakal':
    case 'mandalina':
        console.log(meyve+ ' bir Kış meyvesidir') 
        break; 
    case 'kiraz':
    case 'çilek':
        console.log(meyve+ ' bir İlk bahar meyvesidir')  
        break;
    default:
        console.log('Bilinmeyen Meyve Türü Girildi!');        
}