// let username = "Maksim";

// let surname = "Efremov";
// // alert(`Hello, ${username}!`)

// function calcsum() {
//     let x = document.getElementsByName("x")[0].value
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) + Number(y)

//     let result = document.getElementById("calcresult")
//     result.innerHTML = "Результат:" + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcmin() {
//     let x = document.getElementsByName("x")[0].value
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) - Number(y)

//     let result = document.getElementById("calcresult")
//     result.innerHTML = "Результат:" + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcumn() {
//     let x = document.getElementsByName("x")[0].value
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) * Number(y)

//     let result = document.getElementById("calcresult")
//     result.innerHTML = "Результат:" + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcdel() {
//     let x = document.getElementsByName("x")[0].value
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) / Number(y)

//     let result = document.getElementById("calcresult")
//     result.innerHTML = "Результат:" + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcstep() {
//     let x = document.getElementsByName("x")[0].value
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) ** Number(y)

//     let result = document.getElementById("calcresult")
//     result.innerHTML = "Результат:" + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function codeDetector() {
//     let country = document.getElementsByName("country")[0].value
//     let input = document.getElementsByName("phone")[0]

//     if (country == "none") {
//         input.value = "Вы не выбрали страну"
//     } else if(country == "uz") {
//         input.value = "+998"
//     } else if(country == "ru") {
//         input.value = "+7"
//     } else if(country == "usa") {
//         input.value = "+1"
//     } else {
//         input.value = "Ты что то сделал"
//     }
// }

// function questionDetector() {
//    // let gender = document.getElementsByClassName("gender")[0].value;
//     let gender = document.querySelector('input[name="gender"]:checked').value;
//     let questionInput = document.getElementById("questionInput");
// 3
//     console.log(gender)
//     console.log(questionInput)

//     if (gender == "man") {
//         questionInput.placeholder = "Введите вашу почту"
//     } else if (gender == "woman") {
//         questionInput.placeholder = "Введите ваш адрес"
//     }

// }
// function courseCalculator() {
//     let courseName = document.getElementById("courseSelect").value
//     const PYTHON_PRICE = 9000000
//     const FRONTEND_PRICE = 11000000
//     const DATA_PRICE = 14000000
//     let basicPrice

//     if (courseName == "none"){
//         basicPrice = 0
//     } else if (courseName == "python") {
//         basicPrice = PYTHON_PRICE
//     } else if (courseName == "frontend") {
//         basicPrice = FRONTEND_PRICE
//     } else if (courseName == "data") {
//         basicPrice = DATA_PRICE
//     }

//     let discount = document.getElementsByName("discountRange")[0].value
//     let discountValue = document.getElementById("discountValue")
//     discountValue.innerHTML = discount + "%"

//     let sum = basicPrice/100*(100-discount)

//     let resultInput = document.getElementById("courseSum")
//     resultInput.value = sum

// }
// function activateButton() {
//     let confirm = document.getElementById("confirm").checked
//     let btn = document.querySelector(".dynamicForm button")
//     if(confirm) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }

// }

const DOLLAR_PRICE = 12000
const SUM_PRICE = 1000 

function convertDollar() {
    let sum = document.getElementById('sumCurrency').value
    let dollar = sum / DOLLAR_PRICE
    document.getElementById('dollarCurrency').value = dollar
}

function convertSum() {
    let dollar = document.getElementById('dollarCurrency').value
    let sum = dollar * DOLLAR_PRICE
    document.getElementById('sumCurrency').value = sum
}






