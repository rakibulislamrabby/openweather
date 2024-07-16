import axios from "axios";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Weather from "@/components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(city);

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      });
    setCity('')
    setLoading(false)
    // .catch((err) => {
    //   console.error("Error fetching weather data:", err);
    //   setError("Error fetching weather data");
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  };

  return (
    <div className="w-full h-screen">


      {/* Search */}
      <div className=" top-10 left-0 right-0 flex justify-center items-center  z-10">
        <form onSubmit={fetchWeather} className=" mt-20 p-4 rounded-lg border border-gray-300  flex">
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Search city"
            className="p-2 bg-transparent text-black border-none text-xl  rounded-l-lg border-none outline-none"
          />
          <button onClick={fetchWeather} type="submit" className="bg-green-700 text-white p-2 rounded-r-lg">
            <IoSearch />
          </button>
        </form>
      </div>

      {/* weather  */}
      {weather.main && <Weather data={weather}></Weather>}
    </div>
  );
}
