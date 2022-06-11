import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = ({food, handleAddToCart}) => {
  const { strMealThumb, strMeal, strCategory, strArea,} = food;

  return (
    <div className="card">
    <img src={strMealThumb} alt="" />
      <div className="card-info">
        <h4>{strMeal}</h4>
        <p>Category: {strCategory}</p>
        <p>Area: {strArea}</p>
      </div>
      <div>
        <button onClick={() => handleAddToCart(food)} className="card-btn">Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default Card;
