import React from 'react'

function Popup(prop) {
  return (prop.trigger) ? (
    <div>
      <div>
          <p> Close </p>
          {prop.children}
      </div>
    </div>
  ) : "";
}

export default Popup
