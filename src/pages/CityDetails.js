import React from 'react'
import {useParams} from 'react-router-dom'; 

function CityDetails({cities}) {

    const {cityName} = useParams();
    const currentCity = cities.filter((item) => item.cityName === cityName)
 
  return (
    <div className='city-details-container'>
        <img className='detail-image' src = {currentCity[0].imageUrl} alt={currentCity.cityName}/>
        <h3>{currentCity[0].cityName.toUpperCase()}</h3>
        <p>{currentCity[0].description}</p>        
    </div>
  )
}

export default CityDetails
