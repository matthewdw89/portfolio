import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Wrapper = styled.div`
  width: 100%;
  background-color: silver;
  ${tw`shadow-lg relative rounded-lg px-8 py-8 text-white`};
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: solid white 1px;
  padding-bottom: 1rem;
`

const SkillsCard = ({ title, children}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default SkillsCard

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}