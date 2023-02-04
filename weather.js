let apiKey = '5aa741a37ff6512516bcb3da3ea973f0'
// let city = 'Алматы'


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


 