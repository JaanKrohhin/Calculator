const dollar = 1.16;
const rubles =84.20;
const pounds=0.85;
const yen=128.90;
function change(event) {
//    if (validate('kogus')){
        let amount=document.getElementById('kogus');
        let answer = document.getElementById('answer');
        //multiplies
        if(event.target.id==='dollar'){
            answer.innerHTML=calc(amount.value, dollar)+" $"
        }if(event.target.id==='ruble'){
            answer.innerHTML=calc(amount.value, rubles)+" ₽"
        }if(event.target.id==='yen'){
            answer.innerHTML=calc(amount.value, yen)+" ¥"
        }if(event.target.id==='pounds'){
            answer.innerHTML=calc(amount.value, pounds)+" £"
        }
 //   }
}
function calc(val,currency) {
    return (val*currency).toFixed(2)//symbols after comma
}
function selectChange(event) {
 //   if (validate('kogus2')==true){
        let amount=document.getElementById('kogus2');
        let answer = document.getElementById('answer2');
        if(event.target.value==='dollar'){
            answer.innerHTML=calc(amount.value, dollar)+" $"
        }if(event.target.value==='ruble'){
            answer.innerHTML=calc(amount.value, rubles)+" ₽"
        }if(event.target.value==='yen'){
            answer.innerHTML=calc(amount.value, yen)+" ¥"
        }if(event.target.value==='pounds'){
            answer.innerHTML=calc(amount.value, pounds)+" £"
        }if(event.target.value==='nothing'){
            answer.innerHTML='The answer goes here...'
        }
 //   }
}
/*function validate(id) {
    if (ducument.getElementById(id).value===parseInt(id) && Math.sign(ducument.getElementById(id).value)==1 ){
        return true
    }else {
        return false
    }
}*/
function validateForm() {
    let x = document.forms["cal1"]["kogus"].value;
    if (x == "") {
        alert("Field must not be empty");
        return false;
    }
}
function inputCurrency() {
    let amount=document.getElementById('kogus3').value;
    let inputText = document.getElementById('curName').value;
    let answer = document.getElementById('answer3');
    switch (inputText) {
        case 'dolllar':answer.innerHTML=calc(amount, dollar)+" $"
        break;
        case 'ruble': answer.innerHTML=calc(amount, rubles)+" ₽"
        break;
        case 'yen': answer.innerHTML=calc(amount, yen)+" ¥"
        break;
        case 'pounds':answer.innerHTML=calc(amount, pounds)+" £"
        break;
        case '':answer.innerHTML='The answer goes here.........'
        break;
    }
function f() {
    const time ={"millenium":"1",}
}
}