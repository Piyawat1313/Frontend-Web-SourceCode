

//ข้อมูลจำลองจาก API
export const weatherData = {
        tempC: 20,
        windKm: 14, 
        precipMm: 0,
        inchesIn: 0
};

export function updateWeatherUI(type, unitSystem){
        if(type === 'temp'){
            const mainTemp = document.querySelector('.city-temp');
            const feelsLike = document.querySelector('.stats-card:nth-child(1) strong');

            if(unitSystem === 'imperial'){
                //แปลง celcius เป็น Farenheit
                mainTemp.textContent = Math.round((weatherData.tempC * 9/5) + 32) + '°';
                feelsLike.textContent = '68°'
            }
            else{
                mainTemp.textContent = weatherData.tempC + '°';
                feelsLike.textContent = '18°';
            }
        }

        else if(type === 'wind'){
            
            const windEl = document.querySelector('.stats-card:nth-child(3) strong');
            
            if(unitSystem === 'imperial'){
                //แปลง km/h --> mph
                windEl.textContent = Math.round(weatherData.windKm * 0.621371) + ' mph';
            }
            else{
                windEl.textContent = weatherData.windKm + ' km/h';
            }
        }

        else if(type === 'Precipition'){

            const pre = document.querySelector('.stats-card:nth-child(4) strong');

            if(unitSystem === 'imperial'){
                //แปลง mm --> in
                pre.textContent = Math.round(weatherData.precipMm / 25.4) + ' in';
            }
            else{
                pre.textContent = weatherData.precipMm + ' mm';
            }
        }
    }