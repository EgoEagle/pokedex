import React from 'react'

//{prop.flag && <p key={prop.type2}> {prop.type2} </p>}

function Popup(prop) {
  const style = `${prop.type}`
  const style2 = `${prop.type2}`

  return (prop.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
          <p> {prop.id} </p>
          <p> {prop.name} </p>
          <img src={prop.sprite}/>
          <div className="typeBox">
            <p> Type :</p>
            <p className={style}> {prop.type} </p>
            <p className={style2}> {prop.type2} </p>
          </div>
          
         
          <div className="abilities"> 
          <p>Abilities :  </p> 
          <p> {prop.abilities} </p> 
          
          </div>
          
          <p className="description"> {prop.text} </p>
          {prop.children}

      </div>
    </div>
  ) : "";
}

export default Popup
