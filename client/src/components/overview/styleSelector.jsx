import React, { useState, useEffect } from 'react';
import "../../styles/index.css";

const StyleSelector = (props) => {

  // console.log(props.styles)

  return (
    <div widgetname="Overview"  data-testid='testStyleSelector'  className="styleSelector">
      {!props.styles[props.styleIndex]?.sale_price ? <p>${props.styles[props.styleIndex]?.original_price}</p>
        :
        <p widgetname="Overview"><span widgetname="Overview" className="strikeThrough"> ${props.styles[props.styleIndex]?.original_price} </span> ${props.styles[props.styleIndex]?.sale_price}</p>
      }
      <h2 widgetname="Overview" >STYLE &gt; <span widgetname="Overview" style={{ fontWeight: "normal" }}>{props.styles[props.styleIndex]?.name}</span></h2>
      <div widgetname="Overview"  className="styleContainer">
        {props.styles?.map((product, index) => {

          return (index === props.styleIndex ?
            <div widgetname="Overview" key={index}>
              <div widgetname="Overview"  className="styleGroup">
                <div widgetname="Overview"  className="selected">&#8202; &#x2713;</div>
                <img  widgetname="Overview" className="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} alt="..."/>
              </div>
            </div>
            :
            <div widgetname="Overview" key={index}>

              <div widgetname="Overview"  className="styleGroup">
                <img  widgetname="Overview" className="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} alt="..."/>
              </div>
            </div>

          )
        }
        )}

      </div>
    </div >
  )
}

export default StyleSelector;