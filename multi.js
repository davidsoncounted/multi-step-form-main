let first = document.getElementById("step-1");
let second = document.getElementById("step-2");
let third = document.getElementById("step-3");
let four = document.getElementById("step-4");
let last = document.getElementById("last-sec");
let sone = document.getElementById("one");
let stwo = document.getElementById("two");
let sthree = document.getElementById("three")
let sfour = document.getElementById("ano")

// let bot = document.getElementById("colo");
// let book = document.getElementById("colol");
// let cook = document.getElementById("cool")
// let cole = document.getElementById("co")
// let baii = document.getElementById("back");

// console.log(baii)
// let y = document.getElementById("next");
            // let n = document.getElementById("fail");
// let form = document.getElementById("form")
// let pNumber = document.getElementById("Pnumber").value
// let email = document.getElementById("email")
// let userName = document.getElementById("username")

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     checkInputs();
// })

// function checkInputs(){
//     let userNameValue = userName.value.trim()
//     let emailValue = email.value.trim()
//     let pNumberValue = pNumber.value.trim()
// }
// if (userNameValue === ''){
//     alert("invakid")
// }else{
//     alert("success")
// }


 

first.style = `display: block;`
second.style = `display: none;`
third.style = `display: none;`
four.style = `display: none;`
last.style = `display:none;`
sone.classList.add("first")
stwo.classList.remove("first")
sthree.classList.remove("first")
sfour.classList.remove("first")

// number 1 function 
function num1(){
    first.style = `display: block;`
    second.style = `display: none;`
    third.style = `display: none;`
    four.style = `display: none;`
    last.style = `display: none;`
    sone.classList.add("first")
    stwo.classList.remove("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")
    // bot.style= `background-color: var(--primary-col-4);`
}

// number 2 function 
function num2(){
    second.style = `display: block;`
    first.style = `display: none;`
    third.style = `display: none;`
    four.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.add("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")
    // book.style = `background-color: var(--primary-col-4);`

}

// number 3 function 
function num3(){
    third.style = `display: block;`
    first.style = `display: none;`
    second.style = `display: none;`
    four.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.remove("first")
    sthree.classList.add("first")
    sfour.classList.remove("first")
    
}

// number 4 function 
function num4(){
    four.style = `display: block;`
    first.style = `display: none;`
    second.style = `display: none;`
    third.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.remove("first")
    sthree.classList.remove("first")
    sfour.classList.add("first")
    // four.style = `display: none;`
}

// Number 3 Back function 
function back(){
    first.style = `display:none;`
    second.style = `display: block;`
    third.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.add("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")


}

// number 2 BACK function 
function gback(){
    first.style = `display: block;`
    second.style = `display: none;`
    third.style = `display: none;`
    last.style = `display: none;`
    sone.classList.add("first")
    stwo.classList.remove("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")
}

// step 1 next function 
function firstNext(){
    first.style = `display: none;`
    second.style = `display: block;`
    third.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.add("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")
}

// step 2 next function 
function next(){
    first.style = `display: none;`
    second.style = `display: none;`
    third.style = `display: block;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.remove("first")
    sthree.classList.add("first")
    sfour.classList.remove("first")
}

// last Confirm function 
function con(){
    last.style = `display:block;`
    four.style = `display: none;`
    first.style = `display: none;`
    second.style = `display: none;`
    third.style = `display: none;`
}

// Step4 back function 
function step4Back(){
    last.style = `display: none;`
    four.style = `display: none;`
    first.style = `display: none;`
    second.style = `display: none;`
    third.style = `display: block;`
    sone.classList.remove("first")
    stwo.classList.remove("first")
    sthree.classList.add("first")
    sfour.classList.remove("first")
}

// step3 next function 
function tap(){
    last.style = `display: none;`
    four.style = `display: block;`
    first.style = `display: none;`
    second.style = `display: none;`
    third.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.remove("first")
    sthree.classList.remove("first")
    sfour.classList.add("first")
}
//  change function 
function backTo() {
    second.style = `display: block;`
    first.style = `display: none;`
    third.style = `display: none;`
    four.style = `display: none;`
    last.style = `display: none;`
    sone.classList.remove("first")
    stwo.classList.add("first")
    sthree.classList.remove("first")
    sfour.classList.remove("first")
}
// let move = document.getElementById("switch")

// step 2 elements starts 
let rightSide = document.getElementById("right-side")
let leftSide = document.getElementById("left-side")
let payOne = document.getElementById("pay1")
let payTwo = document.getElementById("pay2")
let payThree = document.getElementById("pay3")
let payOnea = document.getElementById("pay1a")
let payTwob = document.getElementById("pay2b")
let payThreec = document.getElementById("pay3c");
let monthFree1 = document.getElementById("month-free1")
let monthFree2 = document.getElementById("month-free2")
let monthFree3 = document.getElementById("month-free3")
// step 2 elements ends 

// step 3 elements 
let onlineFirstMonthly = document.getElementById("online-first-monthly")
// let onlineSecondMonthly = document.getElementById("online-second-monthly")
// let onlineThirdMonthly = document.getElementById("online-third-monthly")
let onlineFirstYearly = document.getElementById("online-second-yearly")
// let onlineSecondYearly = document.getElementById("online-second-yearly")
// let onlineThirdYearly = document.getElementById("online-third-yearly")
let largerFirstMonthly = document.getElementById("larger-first-monthly")
// let largerSecondMonthly = document.getElementById("larger-second-monthly")
// let largerThirdMonthly = document.getElementById("larger-third-monthly")
let largerFirstYearly = document.getElementById("larger-second-yearly")
// let largerSecondYearly = document.getElementById("larger-second-yearly")
// let largerThirdYearly = document.getElementById("larger-third-yearly")
let customizeFirstMonthly = document.getElementById("customize-first-monthly")
// let customizeSecondMonthly = document.getElementById("customize-second-monthly")
// let customizeThirdMonthly = document.getElementById("customize-third-monthly")
let customizeFirstYearly = document.getElementById("customize-second-yearly")
// let customizeSecondYearly = document.getElementById("customize-second-yearly")
// let customizeThirdYearly = document.getElementById("customize-third-yearly")
// step 3 elements ends 

// step 4 elements starts
let arcadeMonthly = document.getElementById("arcade-monthly")
let advancedMonthly = document.getElementById("advanced-monthly")
let proMonthly = document.getElementById("pro-monthly")
let arcadeYearly = document.getElementById("arcade-yearly")
let advancedYearly = document.getElementById("advanced-yearly")
let proYearly = document.getElementById("pro-yearly")
let arcadeMonthlySub = document.getElementById("arcade-monthly-sub")
let arcadeYearlySub = document.getElementById("arcade-yearly-sub")
let advancedMonthlySub = document.getElementById("advanced-monthly-sub")
let advancedYearlySub = document.getElementById("advanced-yearly-sub")
let proMonthlySub = document.getElementById("pro-monthly-sub")
let proYearlySub = document.getElementById("pro-yearly-sub")


// step 2 by default 
leftSide.classList.add("bold");
rightSide.classList.remove("bold");
payOne.style = `display: block;`
payTwo.style = `display: block;`
payThree.style = `display: block;`
payOnea.style = `display: none;`
payTwob.style = `display: none;`
payThreec.style = `display: none;`
monthFree1.style = `display: none;`
monthFree2.style = `display: none;`
monthFree3.style = `display: none;`
onlineFirstMonthly.style = `display: block`
onlineFirstYearly.style = `display: none;`
largerFirstMonthly.style = ` display: block;`
largerFirstYearly.style = `display: none;`
customizeFirstMonthly.style = `display: block;`
customizeFirstYearly.style = `display: none;`
arcadeMonthly.style = `display: block;`
advancedMonthly.style = `display: none;`
proMonthly.style = `display: none;`
arcadeYearly.style = `display: none;`
advancedYearly.style = `display: none;`
proYearly.style = `display: none;`
arcadeMonthlySub.style = `display: block;`
arcadeYearlySub.style = `display: none;`
advancedMonthlySub.style = `display: none;`
advancedYearlySub.style = `display: none;`
proMonthlySub.style = `display: none;`
proYearlySub.style = `display: none;`
// function slide(){
//     leftSide.classList.add("bold") 
//     rightSide.classList.remove("bold")
//     payOne.style = `display: none;`
//     payTwo.style = `display:none;`
//     payThree.style = `display:none;`
//     payOnea.style = `display: block;`
//     payTwob.style = `display: block`
//     payThreec.style = `display: block`
    
    
// }
let firstSlider = document.getElementById("monthly_sub");
let secondtSlider = document.getElementById("yearly_sub");


const Slide = () => {
    if(firstSlider.checked == true){
        payOne.style = `display: block;`
        payTwo.style = `display: block;`
        payThree.style = `display: block;`
        payOnea.style = `display: none;`
        payTwob.style = `display: none;`
        payThreec.style = `display: none;`
        leftSide.classList.add("bold");
        rightSide.classList.remove("bold");
        monthFree1.style = `display: none;`
        monthFree2.style = `display: none;`
        monthFree3.style = `display: none;`
        onlineFirstMonthly.style = `display: block`
        onlineFirstYearly.style = `display: none;`
        largerFirstMonthly.style = ` display: block;`
        largerFirstYearly.style = `display: none;`
        customizeFirstMonthly.style = `display: block;`
        customizeFirstYearly.style = `display: none;`
        arcadeMonthly.style = `display: block;`
        advancedMonthly.style = `display: none;`
        proMonthly.style = `display: none;`
        arcadeYearly.style = `display: none;`
        advancedYearly.style = `display: none;`
        proYearly.style = `display: none;`
        arcadeMonthlySub.style = `display: block;`
        arcadeYearlySub.style = `display: none;`
        advancedMonthlySub.style = `display: none;`
        advancedYearlySub.style = `display: none;`
        proMonthlySub.style = `display: none;`
        proYearlySub.style = `display: none;`

    } else{
        payOne.style = `display: none;`
        payTwo.style = `display: none;`
        payThree.style = `display: none;`
        payOnea.style = `display: block;`
        payTwob.style = `display: block;`
        payThreec.style = `display: block;`
        monthFree1.style = `display: block;`
        monthFree2.style = `display: block;`
        monthFree3.style = `display: block;`
        onlineFirstMonthly.style = `display: none`
        onlineFirstYearly.style = `display: block;`
        largerFirstMonthly.style = ` display: none;`
        largerFirstYearly.style = `display: block;`
        customizeFirstMonthly.style = `display: none;`
        customizeFirstYearly.style = `display: block;`

        arcadeMonthly.style = `display: none;`
        advancedMonthly.style = `display: block;`
        proMonthly.style = `display: none;`
        arcadeYearly.style = `display: none;`
        advancedYearly.style = `display: none;`
        proYearly.style = `display: none;`
        arcadeMonthlySub.style = `display: none;`
        arcadeYearlySub.style = `display: none;`
        advancedMonthlySub.style = `display: block;`
        advancedYearlySub.style = `display: none;`
        proMonthlySub.style = `display: none;`
        proYearlySub.style = `display: none;`

    }
}
const Slide2 = () => {
    if(secondtSlider.checked == true){        
        payOne.style = `display: none;`
        payTwo.style = `display: none;`
        payThree.style = `display: none;`
        payOnea.style = `display: block;`
        payTwob.style = `display: block;`
        payThreec.style = `display: block;`
        monthFree1.style = `display: block;`
        monthFree2.style = `display: block;`
        monthFree3.style = `display: block;`
        leftSide.classList.remove("bold");
        rightSide.classList.add("bold");
        onlineFirstMonthly.style = `display: none`
        onlineFirstYearly.style = `display: block;`
        largerFirstMonthly.style = ` display: none;`
        largerFirstYearly.style = `display: block;`
        customizeFirstMonthly.style = `display: none;`
        customizeFirstYearly.style = `display: block;`

        arcadeMonthly.style = `display: none;`
        advancedMonthly.style = `display: none;`
        proMonthly.style = `display: none;`
        arcadeYearly.style = `display: block;`
        advancedYearly.style = `display: none;`
        proYearly.style = `display: none;`
        arcadeMonthlySub.style = `display: none;`
        arcadeYearlySub.style = `display: block;`
        advancedMonthlySub.style = `display: none;`
        advancedYearlySub.style = `display: none;`
        proMonthlySub.style = `display: none;`
        proYearlySub.style = `display: none;`

    } else{
        payOne.style = `display: block;`
        payTwo.style = `display: block;`
        payThree.style = `display: block;`
        payOnea.style = `display: none;`
        payTwob.style = `display: none;`
        payThreec.style = `display: none;`
        monthFree1.style = `display: none;`
        monthFree2.style = `display: none;`
        monthFree3.style = `display: none;`
        onlineFirstMonthly.style = `display: block`
        onlineFirstYearly.style = `display: none;`
        largerFirstMonthly.style = ` display: block;`
        largerFirstYearly.style = `display: none;`
        customizeFirstMonthly.style = `display: block;`
        customizeFirstYearly.style = `display: none;`

        arcadeMonthly.style = `display: none;`
        advancedMonthly.style = `display: none;`
        proMonthly.style = `display: none;`
        arcadeYearly.style = `display: none;`
        advancedYearly.style = `display: block;`
        proYearly.style = `display: none;`
        arcadeMonthlySub.style = `display: none;`
        arcadeYearlySub.style = `display: none;`
        advancedMonthlySub.style = `display: none;`
        advancedYearlySub.style = `display: block;`
        proMonthlySub.style = `display: none;`
        proYearlySub.style = `display: none;`
        
    }
}
firstSlider.onclick = Slide;
secondtSlider.onclick = Slide2;



