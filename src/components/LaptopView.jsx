import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Macbook = styled.div`
  width: 100%;
  margin: 50px auto;
  perspective: 750;
  perspective-origin: 50% bottom;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  &:hover {
    transform: translateY(-12px);
    
  }
`
const MacbookLid = styled.div`
  width: 80%;
  margin: 0 auto;
`

const MacbookScreen = styled.div`
  position: relative;
  background-color: #353535;
  margin: 0 auto;
  padding: 3%;
  border-radius: 5px 5px 0 0;
`
const MacbookContent=styled.div`
  position: relative;
  overflow: hidden;
  background: url("${props => props.bg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 6px #222;
  :before {
    display: block;
    content: '';
    width: 1px;
    padding-top: 60%;
    float: left;
  }
  
`
const MacbookBase = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #D3D1D2;
  border-radius: 2px 2px 10px 10px;
  :before {
    display: block;
    content: '';
    width: 30%;
    margin: 0 auto 1% auto;
    padding-top: 1.5%;
    background: #B0B0B0;
    border-radius: 0 0 10px 10px;
  }
  :after {
    display: block;
    content: '';
    padding-top: 1%;
    background-color: #B3B3B3;
  }
`

const LaptopView = ({bg}) => (
  <Macbook>
    <MacbookLid>
      <MacbookScreen>
        <MacbookContent bg={bg}>
        </MacbookContent>
      </MacbookScreen>
    </MacbookLid>
    <MacbookBase></MacbookBase>
  </Macbook>
)

export default LaptopView

LaptopView.propTypes = {
  bg: PropTypes.string.isRequired,
}