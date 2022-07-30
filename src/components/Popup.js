import React from 'react'

//{prop.flag && <p key={prop.type2}> {prop.type2} </p>}

function Popup(prop) {
  const style = `${prop.type}`
  const style2 = `${prop.type2}`

  return (prop.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <p className="popupId"> #{prop.id} </p>
        <p className="popupName"> {prop.name} </p>
        <div className="mainProfile">
          <span className="profileBox">
            <img className={`popupImg ${style} `} src={prop.sprite}/>
          </span>

          <div className="profileBox2">
            <div className="typeBox">
              <p> Type :</p>
              <p className={style}> {prop.type} </p>
              <p className={style2}> {prop.type2} </p>
            </div>
            
          
            <div className="abilities"> 
            <p>Abilities :  </p> 
            <p> {prop.abilities} </p> 
            </div>

            <div className="stats"> 
            <p>HP : {prop.hp} </p> 
            <p>Attack : {prop.atk} </p> 
            <p>Defense : {prop.def} </p> 
            <p>Sp Attack : {prop.spatk} </p> 
            <p>Sp Defense : {prop.spdef} </p>
            <p>Speed : {prop.spd} </p>  
            
            </div>
          </div>

        </div>
          
          <div className="profileBox3">
            <p className="description"> {prop.text} </p>
          </div>
          {prop.children}

      </div>
    </div>
  ) : "";
}

export default Popup
