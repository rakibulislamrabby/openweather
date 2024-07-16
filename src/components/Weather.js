import React from 'react';

const Weather = ({ data }) => {
    console.log("from Weather", data);

    // Convert temperatures from Kelvin to Celsius
    const tempCelsius = (data.main.temp - 273.15).toFixed(1);
    const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(1);

    return (
        <div className='mt-28 flex flex-col justify-between p-4 bg-blue-200 rounded-lg shadow-lg'>
            <div>
                <h1 className='text-2xl font-bold'>{data.name}, {data.sys.country}</h1>
                <div className='flex items-center'>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" />
                    <div className='ml-4'>
                        <p className='text-lg'>{data.weather[0].main}</p>
                        <p className='text-2xl'>{tempCelsius}°C</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p>Feels like: {feelsLikeCelsius}°C</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Pressure: {data.main.pressure} hPa</p>
                <p>Wind: {data.wind.speed} m/s, {data.wind.deg}°</p>
                <p>Visibility: {data.visibility / 1000} km</p>
            </div>
        </div>
    );
};

export default Weather;
