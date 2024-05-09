import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://api.weatherapi.com/v1/current.json?key=d2ed0d2d45c64e99b7471648240805&q=${search}&aqi=yes`;

    const response = await fetch(url);
    const data = await response.json();
    setName(data);
    console.log(name);
    setLoading(true);
  };
  return (
    <div className="mainpage">
      <div className="top-heading">𝕎𝕖𝕒𝕥𝕙𝕖𝕣𝕝𝕪</div>
      <div className="header">
        <form className="form">
          <input
            className="input"
            placeholder="Search City"
            required=""
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="search" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {loading ? (
        <>
          <div className="content">
            {name.current.condition.text === "Partly cloudy" ? (
              <div className="clouds"></div>
            ) : (
              <></>
            )}
            {name.current.condition.text === "Mist" ? (
              <div className="mist"></div>
            ) : (
              <></>
            )}
            {name.current.condition.text === "Snow" ? (
              <div className="snow"></div>
            ) : (
              <></>
            )}
            {name.current.condition.text === "Sunny" ||
            name.current.condition.text === "Clear" ? (
              <div className="image"></div>
            ) : (
              <></>
            )}

            <div className="cel">
              {name.current.temp_c}
              <p className="para">&#176;</p>
            </div>
            <div className="city">{name.location.name}</div>
          </div>

          {/* <div className="footer">
        <div className="humid">
            <div className="humid-img"></div>
            <div className="p">{name.current.humidity}%</div>
        </div>
        <div className="wind humid">
            <div className="wind-img"></div>
            <div className="p wind-p"><br />km/hr</div>
        </div>
      </div> */}

          <div className="footer">
            <div className="card">
              <i className="fa-solid fa-wind"></i>
              {name.current.gust_kph} km/hr
            </div>
            <div className="card card2">
              <i className="fa-solid fa-water"></i>
              {name.current.humidity}%
            </div>
            <div className="card card3">
              <i className="fa-solid fa-industry"></i>
              {name.current.air_quality.o3}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
