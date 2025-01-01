import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";//y
import WorkoutCard from "../components/cards/WorkoutCard";//y
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';
import { DateCalendar } from "@mui/x-date-pickers";//y
// import { getWorkouts } from "../api";
import { CircularProgress } from "@mui/material";//y
// import { useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import AddWorkoutTexterea from "../components/AddWorkoutTexterea";
import AddWorkoutInputs from "../components/AddWorkoutInputs";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Right = styled.div`
  flex: 1;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const SecTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Workouts = () => {
    // const dispatch = useDispatch();
    const [todaysWorkouts, setTodaysWorkouts] = useState([]);
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    // const [newWorkout, setNewWorkout] = useState("");
    // {
    //   area: "",
    //   title: "",
    //   // count: "",
    //   sets: "",
    //   reps: "",
    //   weight:"",
    //   duration: "",
    // }
    const [showAddForm, setShowAddForm] = useState(false);

    //modification
    const [editingIndex, setEditingIndex] = useState(null); // Indice du workout à éditer
    const [editingWorkout, setEditingWorkout] = useState(null); // Données du workout à éditer

    const startEditingWorkout = (index) => {
      setEditingIndex(index); // Enregistrer l'indice du workout à éditer
      setEditingWorkout(todaysWorkouts[index]); // Charger les données du workout
    };
    //end    



    //pour gerer l'affichage du comp addworkout
    const toggleForm = () => {
      setShowAddForm(!showAddForm);
    };
      
    
  //Récupérer les workouts d'une date spécifique
    const getTodaysWorkout = async (date) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8000/workouts/${date}`);//http://localhost:8000/workouts/2024-03-22
            if (response && response.data){
                setTodaysWorkouts(response.data); 
                setLoading(false);
            } 
        } catch (error) {
            console.error("Erreur de récupération des workouts", error);
        }
    };
  

  // Ajouter un nouveau workout
  const addTodaysWorkout = async (workout) => {
    try {
      await axios.post(`http://localhost:8000/workouts/${date}`, workout);//{ workout: newWorkout }
      getTodaysWorkout(date); // Recharger les workouts après ajout
    } catch (error) {
      console.error("Erreur d'ajout de workout", error);
    }
  };

  // Modifier un workout
  const editWorkout = async (index, updatedWorkout) => {
    try {
      await axios.put(`http://localhost:8000/workouts/${date}/${index}`, updatedWorkout);
      getTodaysWorkout(date); // Recharger les workouts après modification
    } catch (error) {
      console.error("Erreur de modification de workout", error);
    }
  };

  // Supprimer un workout
  const deleteWorkout = async (index) => {
    const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce workout ?");
  if (!confirmed) return; // Si l'utilisateur annule, on arrête la fonction

    try {
      await axios.delete(`http://localhost:8000/workouts/${date}/${index}`);
      getTodaysWorkout(date); // Recharger les workouts après suppression
    } catch (error) {
      console.error("Erreur de suppression de workout", error);
    }
  };

  // Gérer la sélection d'une date
  const handleDateChange = (e) => {
    setDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
    getTodaysWorkout(date); // Charger les workouts pour cette date
  };

  useEffect(() => {
    if(date) getTodaysWorkout(date);
  }, [date]);//charger les workouts
    
    return (
      <Container>
        <Wrapper>
          <Left>
            <Title>Select Date</Title>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={(e) => setDate(`${e.$y}-${e.$M + 1}-${e.$D}`)}
              />
            </LocalizationProvider>
          </Left>
          <Right>
            <Fab
                    size="medium"
                    color="secondary"
                    aria-label="add"
                    className="AddWorkout"
                    style={{ position: "relative" }}
                    onClick={() =>toggleForm() }
            >
                    <AddIcon />
            </Fab>
            {
              showAddForm && <AddWorkoutInputs
                //workout={newWorkout}  // Passe le nouvel état du workout
                //setWorkout={setNewWorkout}  // Permet de modifier cet état
                addNewWorkout={addTodaysWorkout}  // Fonction pour ajouter un workout
                buttonLoading={loading}  // Indicateur de chargement
              />
            }
            <Section>
              <SecTitle>Todays Workout: {date}</SecTitle>
              {loading ? (
                <CircularProgress />
              ) : (
                <CardWrapper>
                  {todaysWorkouts.map((workout,index) => (
                    <WorkoutCard workout={workout} index={index} deleteWorkout={deleteWorkout}/>
                  ))}
                </CardWrapper>
              )}
            </Section>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default Workouts;