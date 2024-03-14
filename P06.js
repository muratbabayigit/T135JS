//Objects

var ogrenci={

    isim:'Tarık',
    soyIsim:'Yiğit',
    age:19,
    isHeStudent:true,
    school: 'İstanbul Teknik University'

}

console.log('Öğrenci Adı Soyadı: '+ogrenci.isim+' '
                        +ogrenci.soyIsim+'\nOgrenci Yaşı:'+ogrenci.age+'\nOgrenci Kaydı Var mı?:'
                        +ogrenci.isHeStudent+'\nOkulu:'+ogrenci.school)


                        
ogrenci.isim='Esma Sena';
ogrenci.age=14;
ogrenci.school='Galatasaray Lisesi'  

console.log(' ')
console.log(' ')
console.log('Öğrenci Adı Soyadı: '+ogrenci.isim+' '
                        +ogrenci.soyIsim+'\nOgrenci Yaşı:'+ogrenci.age+'\nOgrenci Kaydı Var mı?:'
                        +ogrenci.isHeStudent+'\nOkulu:'+ogrenci.school)