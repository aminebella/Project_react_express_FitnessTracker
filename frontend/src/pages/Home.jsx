//Ismail : voici votre page, si vous voulez ajouter des composents, ajouter les sur le dossier components: src/components/
// pour l'appeler c'est avec : import ComponentName from "../components/ComponentName";

//Les commandes a executer dans le terminal pour runer cette appliaction:
  //terminal 1
    // cd backend
    // npm install
    // node index.js
  //terminal 2
    // cd frontend
    // npm install
    // npm install styled-components
    // npm install @mui/material @mui/lab @mui/icons-material @emotion/styled @emotion/react
    // npm install axios
    // npm install react-router-dom react-redux redux-persist @reduxjs/toolkit
    // npm install dayjs
    // npm install @mui/x-charts @mui/x-date-pickers
    // npm start

    import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useEffect, useState } from "react";
import Team from "../components/Team";

import getStarted from "../Assets/getStarted.webp";
import { ReactComponent as Fb } from "../Assets/facebook.svg";
import { ReactComponent as Insta } from "../Assets/instagram.svg";
import { ReactComponent as In } from "../Assets/linkedin.svg";
import AddworkoutPage from "../Assets/AddworkoutPage.png";
import AllworkoutPage from "../Assets/AllworkoutPage.png";
import workoutPage from "../Assets/workoutPage.png";
import Backdrop from "@mui/material/Backdrop";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import CircularProgress from "@mui/material/CircularProgress";
// import Avatar from "@mui/material/Avatar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

import "../styles/home.css";







const Home = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '20px 0',
    },
    main: {
      padding: '20px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    footer: {
      marginTop: '20px',
      padding: '10px 0',
      backgroundColor: '#f1f1f1',
    },
  };

  const pros = [
    {
      title: "Track Your Workouts",
      text: "Easily log and organize your workout routines, including sets, reps, and weights for better progress tracking.",
    },
    {
      title: "Monitor Your Progress",
      text: "Visualize your gains with comprehensive progress tracking, ensuring you stay on top of your fitness goals.",
    },
    {
      title: "Custom Workout Plans",
      text: "Create personalized workout plans tailored to your fitness needs and goals.",
    },
  ];

  const sitePreviewImgs = [
    {
      img: workoutPage,
      title: "Workout Planner",
      text: "Create and manage workout plans with ease. Categorize your exercises and track your progress.",
    },
    {
      img: AllworkoutPage,
      title: "Fitness view",
      text: "View a number of popular exercices",
    },
    {
      img: AddworkoutPage,
      title: "Adding new Exercice",
      text: "create your own workout with ease",
    },
  ];

  const footerLinkStyle =
    "link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-body-secondary";

  let [index, setIndex] = useState(0);
  let [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {/* <h1>Bienvenue dans votre salle de gym</h1> */}
      </header>
      <main style={styles.main}>
        <p>
          Découvrez vos besoins de gym. Nous offrons des solutions adaptées à vos besoins.
        </p>

        <main className="text-center h-50 d-flex align-items-center justify-content-center">
          <section className="w-100">
            <h1 className="fw-bold p-2 w-100 siteTitle" style={{ fontSize: "5vw" }}>
              Write,plan,organize
            </h1>
            <div className="text-center p-2 d-flex justify-content-center">
              <p className="fw-bold w-50">
                Plan your workout for everyday with Fittrack, make your Workout palning
                easy
              </p>
            </div>
            <div>
              <span className="text-body-secondary p-2">
                Begin your success journey
              </span>
              </div>
          </section>
        </main>

        <article style={{ height: "400px" }}>
          <header>
            <div className="prosList d-flex justify-content-center gap-5">
              <div
                className={`iconWrapper ${index === 0 && "shadow"}`}
                onClick={() => setIndex(0)}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/vweaucqr.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ffffff"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
              </div>
              <div
                className={`iconWrapper ${index === 1 && "shadow"}`}
                onClick={() => setIndex(1)}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/qxqvtswi.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ffffff,tertiary:#000000"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
              </div>
              <div
                className={`iconWrapper ${index === 2 && "shadow"}`}
                onClick={() => setIndex(2)}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/ofcynlwa.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#ffffff,tertiary:#ffffff,quaternary:#ffffff"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
              </div>
            </div>
          </header>
          <aside className="w-100 mt-5 text-center">
            <h1 className="fw-bold">{pros[index].title}</h1>
            <div className="d-flex justify-content-center">
              <p className="w-25 prosText prosText" key={pros[index].title}>
                {pros[index].text}
              </p>
            </div>
          </aside>
        </article>

        <section id="peek">
          <article className="text-center" id="previewText" key={indexImg}>
            <h1 className="fw-bold">{sitePreviewImgs[indexImg].title}</h1>
            <div className="d-flex justify-content-center">
              <p className="text-body-secondary w-50 peekText">
                {sitePreviewImgs[indexImg].text}
              </p>
            </div>
          </article>
          <aside className="siteImgsWrapper mt-3">
            <img
              src={sitePreviewImgs[indexImg].img}
              alt=""
              className="shadow"
            />
            <RadioGroup
              defaultValue="tasks"
              name="radio-buttons-group"
              className="flex-row"
            >
              <Radio
                onClick={() => setIndexImg(0)}
                value={"tasks"}
                color="secondary"
              />
              <Radio
                onClick={() => setIndexImg(1)}
                value={"notes"}
                color="success"
              />
              <Radio onClick={() => setIndexImg(2)} value={"stats"} />
            </RadioGroup>
          </aside>
        </section>


        <div className="mt-5 d-flex justify-content-center" id="about">
          <hr className="w-50" />
        </div>

        <section className="mt-5">
          <h1 className="text-center mb-3 fw-bold" style={{ fontSize: "50px" }}>
            About Fittrack
          </h1>
          <div className="d-flex justify-content-center h-100">
            <p
              className="text-center w-50 lh-lg fw-lighter fst-italic aboutText"
              style={{ fontSize: "17px" }}
            >
              FitTrack is a dynamic fitness tracking app designed to help users stay on top of 
              their workouts with ease and efficiency. With its user-friendly interface, 
              FitTrack enables you to view popular workouts, explore a variety of exercises, 
              and create your own custom workout plans tailored to your goals. You can effortlessly modify, 
              delete, or update your workout routines as needed, giving you complete control over your 
              fitness journey. The app allows you to track your workouts by date, ensuring that 
              you can monitor your progress and stay motivated as you achieve new milestones. 
              Whether you're a beginner or a seasoned athlete, FitTrack provides the flexibility 
              and tools you need to enhance your fitness routine, track your progress, and stay 
              committed to your fitness goals. With FitTrack, you'll be empowered to work out smarter, 
              stay organized, and reach new heights in your fitness journey.
            </p>
          </div>

          <div className="mt-5 d-flex justify-content-center" id="team">
            <hr className="w-50" />
          </div>
          <Team />
          </section>


        <div className="mt-5 mb-5 d-flex justify-content-center">
          <hr className="w-50" />
        </div>

        <section>
          <h1 className="text-center mb-3 fw-bold" style={{ fontSize: "50px" }}>
            Get started today
          </h1>
          <div className="text-center">
            <p className="fs-5">Play around with it first. Love it later.</p>
            <span className="text-body-secondary">Enter Fittrack </span>
      
            <div>
              <img src={getStarted} alt="" id="footerImg" className="w-80" />
              <hr className="m-0" />
            </div>
          </div>
        </section>


        <footer className="m-5 bg-body d-flex justify-content-around h-50">
          <div>
            <a className="navbar-brand" href="/">
              
              <span className="fw-bold">Fittrack</span>
            </a>
            <p className="text-body-secondary mt-3">
              &copy;
              <span className="m-2">
                {new Date().getFullYear()} Fittrack project
              </span>
            </p>
          </div>
          <div>
            <div className="d-flex gap-5">
              <a href="/">
                <Fb className="social-media" />
              </a>
              <a href="/">
                <Insta className="social-media" />
              </a>
              <a href="/">
                <In className="social-media" />
              </a>
            </div>
            <hr />
            <div className="mb-2">
              <a className={footerLinkStyle} href="/">
                Home
              </a>
            </div>

            <div className="mb-2">
              <a className={footerLinkStyle} href="/#peek">
                Sneak peek
              </a>
            </div>

            <div className="mb-2">
              <a className={footerLinkStyle} href="/#about">
                About Fittrack
              </a>
            </div>
            <div className="mb-2">
              <a className={footerLinkStyle} href="/#team">
                Our Team
              </a>
            </div>
            
  
          </div>
        </footer>

        
        {/* <button style={styles.button}>En savoir plus</button> */}
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;
