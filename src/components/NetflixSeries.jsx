import React from 'react';
import './Netflix.css';
const NetflixSeries = ({ name , rating ,image }) => {
  const Rating = {
    color : rating >= 9 ?'green' : 'yellow',
    fontWeight : 'bold'
  };

  return (
    <div className="card">
      <img src={image} className="card-img"  alt="vite image" />
      <div className="card-content">
      <p>Hello! My dear friends!.. This is nice to meet u all guys here.</p>
      <p><b>Hello all</b> My name is {name}</p>
      <p>
      <span style = {{color:'black'}}><b>Rating :</b></span>
      <span style = {Rating}>{rating}</span>
      </p>
      </div>
    </div>
  );
};

export default NetflixSeries;