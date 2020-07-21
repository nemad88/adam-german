import React from 'react';

import Background from '../components/background/background.component';
import Nav from '../components/nav/nav.component';
import PageTitle from '../components/page-title/page-title.component';
import Home from '../components/home/home.component';
import Works from '../components/works/works.component';
import Skills from '../components/skills/skills.component';
import Experience from '../components/experience/experience.component';
import Contact from '../components/contact/contact.component';

const MainPage = () => {
  return (
    <>
      <Nav></Nav>
      <Background></Background>
      <PageTitle></PageTitle>
      <Experience></Experience>
      <Works></Works>
      <Skills></Skills>
      <Contact></Contact>
      <Home></Home>
    </>
  );
};

export default MainPage;
