import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete"; // Icône pour la suppression
import EditIcon from "@mui/icons-material/Edit"; // Icône pour la modification

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px; /* Décalé par rapport au bouton Delete */
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const WorkoutCard = ({ workout,index, deleteWorkout, editWorkout }) => {
  return (
    <Card index={index}>
      <EditButton onClick={() => editWorkout(index)}>
        <EditIcon />
      </EditButton>
      
      <DeleteButton onClick={() => deleteWorkout(index)}>
        <DeleteIcon />
      </DeleteButton>

      <Category>#{workout?.area}</Category>
      <Name>{workout?.title}</Name>
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.time} min
        </Details>
      </Flex>
    </Card>
  );
};

export default WorkoutCard;
