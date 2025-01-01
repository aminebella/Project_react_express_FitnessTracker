import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// import 'swiper/swiper-bundle.min.css';

// import 'swiper/css/bundle';

import 'swiper/css'; // Import the core Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '../styles/team.css';




// import 'swiper/swiper.min.css';

import Avatar from '@mui/material/Avatar';

// Register Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Team() {
  let message = `we are all one  / Our Power is in our unity
  Our team comprises passionate professionals dedicated to bringing innovative solutions to life. With diverse expertise and a shared commitment to excellence, we work collaboratively to push boundaries and achieve our goals. Get to know the talented individuals who drive our success.`;

  const teamMembers = [
    {
      name: "AMINE BELLA",
      role: "PROJECT CHIEF /BACK-END DEVELOPER",
      description: "Amine,is our skilled back-end developer. He specializes in server-side logic.he is the project chief who ensures everything runs smoothly.",
      instagram: "https://www.instagram.com/",
      github: "https://github.com/AnasGi/TaskBoard",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "SAAD MAKKOUCH",
      role: "DESIGNER",
      description: "Saad, is the project chief who ensures everything runs smoothly.",
      instagram: "https://www.instagram.com/",
      github: "https://github.com/AnasGi/TaskBoard",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "ISMAIL ",
      role: "FRONT-END DEVELOPER",
      description: "Ismail, is our skilled back-end developer. He specializes in server-side logic.",
      instagram: "https://www.instagram.com/",
      github: "https://github.com/AnasGi/TaskBoard",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "AMINE BELLA",
      role: "PROJECT CHIEF /BACK-END DEVELOPER",
      description: "Amine,is our skilled back-end developer. He specializes in server-side logic.he is the project chief who ensures everything runs smoothly.",
      instagram: "https://www.instagram.com/",
      github: "https://github.com/AnasGi/TaskBoard",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/"
    },
];


  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind this Project</h2>
            <p className="section-subtitle">{message}</p>
          </div>
        </div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            navigation={true}
            loop={true}
            className="p-3 pt-0 pb-0"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-item shadow">
                <div className="d-flex justify-content-center" >
                  <Avatar src="/broken-image.jpg" style={{height:"70px" , width:"70px"}}/>
                </div>
                <h3>{member.name}</h3>
                <div className="team-info"><p>{member.role}</p></div>
                <div className="p-2 pb-0 d-flex justify-content-center">
                  <p style={{width:"90%"}}>{member.description}</p>
                </div>
                <ul className="team-icon">
                  <li><a href={member.github} className="github"><i className="fa fa-github"></i></a></li>
                  <li><a href={member.facebook} className="facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href={member.linkedin} className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Team;