import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import config from '../../config/website'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SkillsLogo from '../components/SkillsLogo'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from '../views/Skills'

// Images
import avatar from '../images/avatar.jpeg'
import htmlLogo from '../images/html5.png'
import reactLogo from '../images/react.png'
import cssLogo from '../images/css3.png'
import sassLogo from '../images/sass.png'
import mrSwat from '../images/mrSwat.png'
import journeyImg from '../images/journey.png'


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
    grid-gap: 1rem;
  }
`

const SkillsCard = styled.div`
  ${tw`shadow-lg relative rounded-lg px-6 py-6 text-white`};
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.bg};
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`

const SkillTitle = styled.div`
  ${tw`text-white text-xl md:text-2xl xl:text-3xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: solid white 1px;
  padding-bottom: 1rem;
`

const SkillsWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SpanBlocked = styled.span`
  display: block;
`


const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          <SpanBlocked>Hi,</SpanBlocked> I'm Matt Waters.
        </BigTitle>
        <Subtitle>A freelance Full-Stack Developer.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Mr. Swat"
            link="https://mrswat.herokuapp.com/"
            bg={mrSwat}
          >
            A React.js built browser game that requires you to swat all the fly on the screen before time expires.
          </ProjectCard>
          <ProjectCard
            title="Journey"
            link="https://github.com/matthewdw89/JourneyApp"
            bg={journeyImg}
          >
            Full-Stack web app for travelers to meet other travels. 
            You can search for people in your area, or a destination you are going, 
            and then contact them directly
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Skills offset={2}>
        <Title>Skills</Title>
        <SkillsCard bg="gray">
          <SkillTitle>HTML</SkillTitle>
          <SkillsWrapper>
            <SkillsLogo src={htmlLogo} alt="HTML5 Logo" name={`HTML5`}/>
            <SkillsLogo src={reactLogo} alt="React.js Logo" name={`JSX`}/>
          </SkillsWrapper>
        </SkillsCard>
        <SkillsCard bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
          <SkillTitle>CSS</SkillTitle>
          <SkillsWrapper>
            <SkillsLogo src={cssLogo} alt="CSS3 Logo" name={`CSS3`} />
            <SkillsLogo src={sassLogo} alt="Sass Logo" name={`Sass`} />
          </SkillsWrapper>
        </SkillsCard>
      </Skills>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Matthew Waters picture" />
          <AboutSub>
            I am a Full-Stack Web Developer always looking 
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am passionate about building excellent software that improves the lives of those around me. 
          I specialize in creating software for clients ranging from individuals and small-businesses all the way 
          to large enterprise corporations<SpanBlocked></SpanBlocked>
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
