import { ThemeProvider, styled } from "styled-components";// to define the theam of our project, it a styled component
import { lightTheme } from "./utils/Themes"; //to import the custome styling from variable lighttheme from themes file
import { BrowserRouter, Route, Routes } from "react-router-dom";// to define our routes
// import Authentication from "./pages/Authentication";
// import { useState } from "react";
// import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Home from "./pages/Home";

//container styled componenet
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
//   const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {/* {currentUser ? ( */}
          <Container>
          {/* currentUser={currentUser} */}
            <Navbar  />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
            </Routes>
          </Container>
        {/* ) : ( */}
          {/* <Container>
            <Authentication />
          </Container> */}
        {/* )} */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
