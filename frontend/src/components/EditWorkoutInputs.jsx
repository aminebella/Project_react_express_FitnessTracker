import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.bg_primary || "#fff"};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.primary || "#ccc"};
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary || "#ccc"};
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary || "#007bff"};
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.primary || "#007bff"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: ${({ theme }) => theme.text_secondary || "#ccc"};
    cursor: not-allowed;
  }
`;

function EditWorkoutInputs({ workout, onSave, onCancel }) {
    const [updatedWorkout, setUpdatedWorkout] = useState(workout);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedWorkout({ ...updatedWorkout, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(updatedWorkout);
    };
      

    return (
        <Container>
          <h3>Edit Workout</h3>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="area"
              value={updatedWorkout.area}
              onChange={handleInputChange}
              placeholder="Target Area"
            />
            <Input
              type="text"
              name="title"
              value={updatedWorkout.title}
              onChange={handleInputChange}
              placeholder="Workout Title"
              required
            />
            <Input
              type="number"
              name="sets"
              value={updatedWorkout.sets}
              onChange={handleInputChange}
              placeholder="Sets"
            />
            <Input
              type="number"
              name="reps"
              value={updatedWorkout.reps}
              onChange={handleInputChange}
              placeholder="Reps"
            />
            <Input
              type="number"
              name="weight"
              value={updatedWorkout.weight}
              onChange={handleInputChange}
              placeholder="Weight (kg)"
            />
            <Input
              type="number"
              name="time"
              value={updatedWorkout.time}
              onChange={handleInputChange}
              placeholder="Time (minutes)"
            />
            <div>
              <Button type="submit">Save Changes</Button>
              <Button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      );
}

export default EditWorkoutInputs