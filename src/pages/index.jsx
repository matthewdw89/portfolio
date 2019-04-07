import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from '../views/Skills'

import avatar from '../images/avatar.jpeg'


const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const SkillsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
`

const SpanBlocked = styled.span`
  ${tw`display: block`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          <SpanBlocked>Hello,</SpanBlocked> I'm Matt Waters.
        </BigTitle>
        <Subtitle>I am a Full-Stack Web Developer</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Mr. Swat"
            link="https://mrswat.herokuapp.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A React.js built browser game that requires you to swat all the fly on the screen before time expires.
          </ProjectCard>
          <ProjectCard
            title="Journy"
            link="https://github.com/matthewdw89/JourneyApp"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Full-Stack web app for travelers to meet other travels. 
            You can search for people in your area, or a destination you are going, 
            and then contact them directly
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Skills offset={2}>
        <Title>Skills</Title>
        <SkillsWrapper>
          <
        </SkillsWrapper>
      </Skills>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. 😉
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am passionate about building excellent software that improves the lives of those around me. 
          I specialize in creating software for clients ranging from individuals and small-businesses all the way 
          to large enterprise corporations
          As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, 
          and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact 
          at a high growth company.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:matthewdw89@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.instagram.com/mattdwaters/" target="_blank" rel="noopener noreferrer">Instagram</a> &{' '}
            <a href="https://www.linkedin.com/in/mattdwaters/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          </ContactText>
        </Inner>
        <Footer>
          <SpanBlocked><a href="https://github.com/matthewdw89" target="_blank" rel="noopener noreferrer">Github</a></SpanBlocked>
          Made by Matthew Waters.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
