import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lottery from "./Lottery";
import AddPlace from "./PlaceList";
import { getData } from "../api-helpers/api-helper";

//write a function that returns a random object from the array of objects

export default function App() {
  const [editMode, setListPlaces] = useState(false);
  const [foodPlaces, setFoodPlaces] = useState([]);

  //get the data from getData on load and place result in foodPlaces getData returns the data
  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((data) => {
        setFoodPlaces(data);
      });
  }, []);

  return (
    <>
      {editMode ? (
        <AddPlace setListPlaces={setListPlaces} foodPlaces={foodPlaces} setFoodPlaces={setFoodPlaces} />
      ) : (
        <Lottery setEditMode={setListPlaces} foodPlaces={foodPlaces} />
      )}
    </>
  );
}
