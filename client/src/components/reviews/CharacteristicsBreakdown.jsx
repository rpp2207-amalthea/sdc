import React from 'react';
import { IoCaretDownSharp } from 'react-icons/io5'

const CharacteristicsBreakdown = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 5,
    width: '100%',
    // height: 10,
    // width: '75%',
    backgroundColor: "#e0e0de",
    borderRadius: 5
  }

  const fillerStyles = {
    height: 1,
    width: `${completed * 2}%`,
    backgroundColor: "#e0e0de",
    transition: 'width 1s ease-in-out',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    // color: 'white',
    // fontWeight: 'bold'
  }

  return (
    <div widgetname="Review/Characteristics-Breakdown" style={containerStyles}>
      <div widgetname="Review/Characteristics-Breakdown" style={fillerStyles}>
        <span widgetname="Review/Characteristics-Breakdown" style={labelStyles} className="arrow"><IoCaretDownSharp /></span>
      </div>
    </div>
  )
}

export default CharacteristicsBreakdown;