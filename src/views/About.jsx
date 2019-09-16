import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={`${offset}`} factor={1.4}/>
    <Content speed={0.4} offset={`${offset}`} >
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
