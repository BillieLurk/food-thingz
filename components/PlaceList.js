import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { putData, removeData } from "../api-helpers/api-helper";

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

const Title = styled.h1`
  font-size: 6rem;
  white-space: nowrap;
  margin-bottom: 30px;
  align-self: center;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid white;
`;

const ListContaienr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid white;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const AddButton = styled.button`
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

const BackButton = styled.button`
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

const RemoveButton = styled.button`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid white;
`;

const Input = styled.input`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px 10px 20px;
  height: 50px;
  width: 100%;
`;

const SubmitButton = styled(Input)`
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  height: 170px;
  font-size: 3rem;
`;

const TextArea = styled.textarea`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px 10px 20px;
  height: 100%;
  width: 100%;
`;

const AddPlace = ({
  foodPlaces,
  setFoodPlaces: setFoodPlaces,
  setListPlaces: setListPlaces,
}) => {
  const [addMode, setAddMode] = useState(false);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleAdd = (data) => {
    handleSubmit((data) => setData(JSON.stringify(data)));

    putData(data);
    setFoodPlaces([...foodPlaces, data]);

    setAddMode(false);
  };

  const handleRemove = (id) => {
    removeData(id);
    setFoodPlaces(foodPlaces.filter((place) => place.id !== id));

  };

  return (
    <Container>
      <Title>{addMode ? "Add a place" : "Restaurants"}</Title>
      {addMode ? (
        <Form onSubmit={handleSubmit(handleAdd)}>
          <Input
            {...register("name", { required: true })}
            placeholder="Name of the place"
          />
          <Input
            {...register("price", { required: true, pattern: /^[0-9]*$/i })}
            placeholder="Price (Enter a number 1-5, 5 is realy expensive)"
          />
          <Input
            {...register("location", { required: true })}
            placeholder="Where its at"
          />

          <TextArea
            {...register("description")}
            placeholder="Description (optional)"
          />
          <Input
            {...register("by", { required: true })}
            placeholder="Submitted by... "
          />
          {data}
          <SubmitButton type="submit" />
        </Form>
      ) : (
        <ListContaienr>
          {foodPlaces?.length > 0 &&
            foodPlaces?.map((foodPlace) => (
              <ListItem key={foodPlace.id}>
                <h1>{foodPlace.name}</h1>
                <RemoveButton onClick={() => handleRemove(foodPlace.id)}>
                  X
                </RemoveButton>
              </ListItem>
            ))}
        </ListContaienr>
      )}

      <ButtonContainer>
        {!addMode && (
          <AddButton onClick={() => setAddMode(!addMode)}>
            Add a place!
          </AddButton>
        )}

        <BackButton onClick={() => setListPlaces(false)}>
          <h1>{"<"}</h1>
        </BackButton>
      </ButtonContainer>
    </Container>
  );
};

export default AddPlace;
