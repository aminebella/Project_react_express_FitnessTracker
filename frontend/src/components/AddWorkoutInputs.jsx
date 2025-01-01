import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkoutInputs= ({addNewWorkout, buttonLoading }) => {//,view
  //style={{display: view}}
  const [workout, setWorkout] = useState({
    area: "",
    title: "",
    sets: "",
    reps: "",
    weight: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };
  return (
    <Card >
      <input
        name="area"
        placeholder="Area (e.g., #Legs)"
        value={workout.area}
        onChange={handleChange}
      />
      <input
        name="title"
        placeholder="Title (e.g., Back Squat)"
        value={workout.title}
        onChange={handleChange}
      />
      <input
        name="sets"
        type="number"
        placeholder="Sets"
        value={workout.sets}
        onChange={handleChange}
      />
      <input
        name="reps"
        type="number"
        placeholder="Reps"
        value={workout.reps}
        onChange={handleChange}
      />
      <input
        name="weight"
        type="number"
        placeholder="Weight"
        value={workout.weight}
        onChange={handleChange}
      />
      <input
        name="time"
        type="number"
        placeholder="Time (in minutes)"
        value={workout.time}
        onChange={handleChange}
      />
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout(workout)}
        $isLoading={buttonLoading}
        $isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkoutInputs;
