import React from 'react'

function CityCard({city}) {
  return (
    <div className='city-card'>
        <img className='city-image' src = {city.imageUrl}/>
        <h3>{city.cityName.toUpperCase()}</h3>
        <p>{city.description}</p>
        <a href = {`/citydetails/${city.cityName}`}><button>See Details</button></a>
    </div>
  )
}

export default CityCard