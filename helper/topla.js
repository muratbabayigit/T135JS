




function topla(){
    const sayi1=document.querySelector('#sayi1').value;
    const sayi2=document.querySelector('#sayi2').value;
    const toplam = +sayi1 + +sayi2
    //const toplam = Number(sayi1) + Number(sayi2)
    const sonuc=document.querySelector('#sonuc')
    console.log(toplam)

    sonuc.innerText=`TOPLAM: ${toplam}`


}

