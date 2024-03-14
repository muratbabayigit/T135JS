/*
Kitap ürününde KDV oranı %0:
Gıda ürününde KDV oranı %1:
Temizlik ürününde KDV oranı %8:
Teknoloji ürününde KDV oranı %18:


Bir markete giren Murat;
Bir adet java Kitabı(280₺), 2 adet camsil(100₺), 1 adet Usb alıyor(180₺)
Fatura tutarını hesaplayan kodu yazınız

*/

var kitap=280;
var camSil=50;
var usb=180;
//const faturaTutari=(kitap+(2*camSil+(2*camSil*0.08))+(usb+(usb*0.18)))
const faturaTutari=(kitap+(2*camSil*1.08)+(usb*1.18))
console.log('Fatura Tutarı: '+faturaTutari)



