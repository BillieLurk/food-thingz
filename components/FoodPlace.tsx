import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

const Name = styled.h1`
  
  font-size: 4rem;
  white-space: nowrap;
  margin-bottom: 30px;
  align-self: center;
  text-align: start;
  width: 100%;
`;

const Price = styled.span`
  font-size: 2rem;
`;

const Location = styled.span`
  font-size: 2rem;
`;

const By = styled.h3`
  position: absolute;
  font-size: 2rem;
  bottom: 0;
  right: 0;
`;

//make a function that takes in an int then returns a string with the same number of $ signs as the int
const price = (price: number) => {
  let priceString = "";
  for (let i = 0; i < price; i++) {
    priceString += "$";
  }
  return priceString;
};

const FoodPlace = ({ foodPlace }: { foodPlace: any }) => {

    

  return (
    <Container>
      <Name>{foodPlace.name}</Name>

      <Location>{"@ " + foodPlace.location}</Location>
      <Price>{`Price: ${price(foodPlace.price)}`}</Price>
      <By>{`Suggested by: ${foodPlace.by}`}</By>
    </Container>
  );
};

export default FoodPlace;
