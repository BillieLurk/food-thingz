import React, { useState } from "react";
import FoodPlace from "./FoodPlace";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  aspect-ratio: 2/3;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  padding: 30px 30px 30px 30px;
  color: white;
`;

//style a button black and white with a hover effect using styled components
const EatButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px 10px 20px;
  height: 50px;
  width: 100%;
  //make this always be at the bottom of its parent flex div
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const ListButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px 10px 20px;
  height: 50px;
  aspect-ratio: 1/1;
  //make this always be at the bottom of its parent flex div
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  margin-left: 1rem;
  font-size: 2rem;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const FoodPlaceContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid white;
`;

const Title = styled.h1`
  font-size: 6rem;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
`



const Lottery = ({ foodPlaces, setEditMode }) => {
  const [foodPlace, setFoodPlace] = useState();

  const randomFoodPlace = () => {
    const randomIndex = Math.floor(Math.random() * foodPlaces.length);
    return foodPlaces[randomIndex];
  };
  return (
    <Container>
      <Title>Lets Eat!</Title>
      <FoodPlaceContainer>
        {foodPlace != null && <FoodPlace foodPlace={foodPlace} />}
      </FoodPlaceContainer>
      <ButtonContainer>
        <EatButton onClick={() => setFoodPlace(randomFoodPlace)}>
          Lets Eat!
        </EatButton>
        <ListButton onClick={() => setEditMode(true)}>
          <h1>{">"}</h1>
        </ListButton>
      </ButtonContainer>
    </Container>
  );
};

export default Lottery;
