import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import LaptopView from '../components/LaptopView'

const Wrapper = styled.a`
  width: 100%;
  ${tw`relative no-underline rounded-lg px-8 py-8 text-white`};
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `
const Title = styled.h3`
  ${tw`text-white underline uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide text-center font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-weight: normal;
  margin: 0;
`
const Text = styled.p`
  ${tw`opacity-80 font-sans text-sm md:text-base`};
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const ClickInfo = styled.p`
  ${tw`opacity-75 underline tracking-wide text-center font-sans text-sm md:text-base`};
  margin-top: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`


const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    <LaptopView bg={bg}/>
    <Text>{children}</Text>
    <ClickInfo>{link.includes("github") ? "Click for Github repository" : "Click to view website"}</ClickInfo>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
