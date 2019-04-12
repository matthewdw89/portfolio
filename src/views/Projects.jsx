import React from 'react'
import PropTypes from 'prop-types'
import { DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.1 }
      offset={0.5}
      factor={2.5}
    />
    <Content speed={0.2} offset={`${offset}`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
