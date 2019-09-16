import React from 'react'
import PropTypes from 'prop-types'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const Skills = ({ children, offset }) => (
  <>
    <Content speed={0.2} offset={`${offset}.2`} factor={1}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Skills

Skills.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
