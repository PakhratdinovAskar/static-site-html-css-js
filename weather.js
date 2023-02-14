let apiKey = '5aa741a37ff6512516bcb3da3ea973f0'

function find(city = 'Almaty'){
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`
    $.ajax({
        url: urlApi, 
        dataType: 'json',       
        method: 'get',           
        success: function(data){

            document.getElementById('city').innerHTML = data.name
            document.getElementById('humidity').innerHTML = data.main.humidity
            document.getElementById('wind').innerHTML = data.wind.speed

            let t = Math.round(data.main.temp)
            if (t > 0){
                document.getElementById('temp').innerHTML = '+' + t
            }else{
                document.getElementById('temp').innerHTML = t
            }
        }
    });
}


function findCity(){
    let cities = document.getElementById('text').value
    find(cities)
}

document.getElementById('text').addEventListener('focus', ()=>{
    document.getElementById('h1').style.display = 'none'
    document.getElementById('h2').style.display = 'none'
    document.getElementById('h4').style.display = 'none'
})

document.getElementById('text').addEventListener('blur', ()=>{
    document.getElementById('h1').style.display = ''
    document.getElementById('h2').style.display = ''
    document.getElementById('h4').style.display = ''
})

 