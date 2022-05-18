const API_KEY = "8dec6431-9d18-41db-b071-85821307a5dd"
const API_COUNTRY = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`
const API_LANGUAGE = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`
let API_HOLIDAY = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}`
document.getElementById("countries-list-btn").addEventListener("click", () =>{
    renderCountries()
})
document.getElementById("languages-list-btn").addEventListener('click', () =>{
    renderLanguages()
})
document.getElementById("holidays-btn").addEventListener('click', ()=>{
    renderHolidays()
})

const holidayName = document.getElementById("search-query")
const year = document.getElementById("year-query")
const month = document.getElementById("month-query")
const day = document.getElementById("day-query")
const country = document.getElementById("country-query")
const language = document.getElementById("language-query")
const timeArr = [year, month, day, country, language, holidayName]
const arr = []
const API_ARR= []

function getInput(target){
        let newAPI = ''
        if(target.value  == ''){
            newAPI = `${API_HOLIDAY}&country=VN&year=2021`
            API_ARR.push(newAPI)
        }else{
            arr.push(`&${target.name}=` + target.value)
            newAPI = API_HOLIDAY + arr.join('')
            API_ARR.push(newAPI)
        }
}

function updateURL(arr){
        arr.map((time) => {getInput(time)})
        console.log(API_ARR[API_ARR.length -1])
}

async function getHolidays(){
    try {
        
        const holiday = await fetch(API_ARR[API_ARR.length -1])
        if(holiday.ok){
            const data = await holiday.json()
            console.log('holiday', data)
            return data
        }
    } catch (error) {
        console.log('err', error)
    }

}

async function renderHolidays(){
    try {
        updateURL(timeArr)
        const data = await getHolidays()
        console.log(getHolidays())
        const holidaysList = document.getElementById('holidays-list')
        const ul = holidaysList.children[1]
        ul.innerHTML = ''

        data.holidays.forEach((holiday, index) =>{
            const li = document.createElement('li')
            li.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
              <div class="li-title">${holiday.name}</div>
              <div class="li-text">${holiday.weekday.date.name} - ${holiday.date}</div>
            </div>`
             ul.appendChild(li)
        })
    } catch (error) {
        console.log('err', error)
    }
}


async function getCountries(){
    try {
        const response = await fetch(API_COUNTRY)
        if(response.ok){
            const data = await response.json()
            console.log("country", data)
            return data
        }
    } catch (error) {
        console.log("error", error)
    }
}

async function renderCountries(){
    try {
        const data = await getCountries()
        const countriesList = document.getElementById("countries-list")
        const ul = countriesList.children[2]
        ul.innerHTML = ''
    
        data.countries.forEach((country, index) => {
            const li = document.createElement('li')
            li.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
              <div class="li-title">${country.name}</div>
              <div class="li-text">${country.code}</div>
            </div>`
    
            ul.appendChild(li)
        });
        
    } catch (error) {
        console.log(error,"err")
    }
}

async function getLanguages(){
    try {
        const language = await fetch(API_LANGUAGE)
        if(language.ok){
            const data = await language.json()
            console.log('lang', data)
            return data
        }
    } catch (error) {
        console.log("err", error)
        
    }
}

async function renderLanguages(){
    try {
        const data = await getLanguages()
        const languagesList = document.getElementById("languages-list")
        const ul = languagesList.children[2]
        ul.innerHTML = ''

        data.languages.forEach((language, index) =>{
            const li = document.createElement('li')
            li.innerHTML = ` <div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
              <div class="li-title">${language.name}</div>
              <div class="li-text">Code: ${language.code}</div>
            </div>`

            ul.appendChild(li)
        })
    } catch (error) {
        console.log('err', error)
    }
}
