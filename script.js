var celciusInput=document.querySelector('#celius > input');
var fahrenhitInput=document.querySelector('#fahrenhiet > input');
var KelvinInput=document.querySelector('#Kelvin > input');

let btn=document.querySelector(".button button")

function roundNumber(number){
    return Math.round(number*100)/100

}
celciusInput.addEventListener('input',function(){
    let cTemp=parseFloat (celciusInput.value);
    let fTemp=(cTemp*(9/5))+32;
    let kTemp= cTemp+ 273.15;

    fahrenhitInput.value=roundNumber(fTemp);
    KelvinInput.value=roundNumber(kTemp);
})

fahrenhitInput.addEventListener('input',function(){
    let fTemp=parseFloat (fahrenhitInput.value);
    let cTemp=(fTemp*-32)*(5/9);
    let kTemp= cTemp+ 273.15;

    celciusInput.value=roundNumber(cTemp);
    KelvinInput.value=roundNumber(kTemp);
})
KelvinInput.addEventListener('input',function(){
    let kTemp=parseFloat (KelvinInput.value);
    let cTemp= kTemp-273.15;
    let fTemp=(kTemp-273.15)*(9/5)+32;

    fahrenhitInput.value=roundNumber(fTemp);
    celciusInput.value=roundNumber(cTemp);
})


btn.addEventListener('click',()=>{
    celciusInput.value="";
    fahrenhitInput.value="";
    KelvinInput.value="";

})

