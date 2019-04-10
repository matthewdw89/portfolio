import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Wrapper = styled.div`
  ${tw`w-16 md:w-24 xl:w-32 h-auto`};
  justify-self: center;

`
const Img = styled.img`
  ${tw`w-16 md:w-24 xl:w-32 h-16 md:h-24 xl:h-32`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white text-md md:text-xl xl:text-1xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`

const SkillsLogo = ({ src, alt, name}) => (
  <Wrapper>
    <Img src={src} alt ={alt}></Img>
    <Title>{name}</Title>
  </Wrapper>
)

export default SkillsLogo

SkillsLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}