import React from 'react'

function Popup(prop) {
  return (prop.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
          <p> Close </p>
          {prop.children}
      </div>
    </div>
  ) : "";
}

export default Popup
