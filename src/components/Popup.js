import React from 'react'

function Popup(prop) {
  return (prop.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
          <p> {prop.id} </p>
          <p> {prop.name} </p>
          <img src={prop.sprite}/>
          <p> {prop.type} </p>
          <p className="description"> {prop.text} </p>
          {prop.children}

      </div>
    </div>
  ) : "";
}

export default Popup
