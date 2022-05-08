const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.button')
const operatorBtn = document.querySelectorAll('.operator')
const equalBtn = document.getElementById('equal-btn')
const clearBtn = document.getElementById('clear-btn')
const deleteBtn = document.getElementById('delete-btn')
let num1 = ''
let num2 = ''
let operator = null
console.log(buttons)

function operation(o){
    operator = o
}
       
function changeColor(){
    operatorBtn.forEach((button)=>{
        button.addEventListener('click', ()=>{
            if(button.classList.contains('operator')){
                button.style.backgroundColor = 'red'
                button.style.color = 'white'
            }
    
        })
    })
}
function operatorState(button){
    button.style.backgroundColor = "red"
}

const addNumber = (num) =>{
    if(operator === null){
        if(num === '.' && num1.includes('.')){           
            return
        }
        num1 += num
        display.innerHTML = num1
        console.log(num1)
    }else{
        if(num === '.' && num2.includes('.')){           
            return
        }
        num2 += num
        display.innerHTML = num2
        console.log(num2)
    }
}


equalBtn.addEventListener('click',()=>{
    doMath()
    operator = null
    operatorBtn.forEach((button) =>{
        button.style.backgroundColor = 'white'
        button.style.color = 'rgb(215, 71, 66)'
    })
    
})
clearBtn.addEventListener('click', clearCal)


deleteBtn.addEventListener('click',()=>{
        if(operator == null){
            let long = num1.length - 1
            num1 = num1.substring(0, long)
            display.innerHTML = num1
        }else{
            let long = num2.length - 1
            num2 = num2.substring(0, long)
            display.innerHTML = num2
        }
        }
     )




function doMath(){
    let result = 0
    let resultArr = []
    switch(operator){
        case 'add':
            if(result == 0){
                result = parseFloat(num1) + parseFloat(num2)
                resultArr.push(result)
                display.innerHTML = result
                num1 = result
                num2 = ''
            }else if(result!=0){
                let lastestResult = resultArr[resultArr.length-1]
                result = parseFloat(lastestResult) + parseFloat(num2)
            }
            break
        case 'minus':
            if(result == 0){
                result = parseFloat(num1) - parseFloat(num2)
                resultArr.push(result)
                display.innerHTML = result
                num1 = result
                num2 = ''
            }else if(result!=0){
                let lastestResult = resultArr[resultArr.length-1]
                result = parseFloat(lastestResult) - parseFloat(num2)
            }
            break
        case 'multiply':
            if(result == 0){
                result = parseFloat(num1) * parseFloat(num2)
                resultArr.push(result)
                display.innerHTML = result
                num1 = result
                num2 = ''
            }else if(result!=0){
                let lastestResult = resultArr[resultArr.length-1]
                result = parseFloat(lastestResult) * parseFloat(num2)
            }
            break
        case 'divide':
            if(result == 0){
                result = parseFloat(num1) / parseFloat(num2)
                resultArr.push(result)
                display.innerHTML = result
                num1 = result
                num2 = ''
            }else if(result!=0){
                let lastestResult = resultArr[resultArr.length-1]
                result = parseFloat(lastestResult) / parseFloat(num2)
            }
            break
        default:
            display.innerHTML= ''
    
            
    }

console.log(result)
}

function clearCal(){
    num1 = ''
    num2 = ''
    display.innerHTML = ''
}
// function getInnerText(ele){
//     let value = ele.innerText
//     console.log(value)
// }
changeColor()



