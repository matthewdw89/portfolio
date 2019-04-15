import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { fadeDownAnimation } from '../styles/animations'
import { DividerTop } from '../elements/Dividers'
import Content from '../elements/Content'
import DownArrowImg from '../images/downArrow.svg'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const DownArrow = styled.img`
  width: 50px;
  position: absolute;
  bottom: 0;
  ${fadeDownAnimation};
`

const Hero = ({ children, offset }) => (
  <>
    <DividerTop bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={2}
      offset={`${offset}`}
      factor={0.8}/>
    <Content speed={0.5} offset={offset}>
      <Wrapper>{children}</Wrapper>
      <DownArrow src={DownArrowImg} />
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
