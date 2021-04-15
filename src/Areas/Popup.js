import React from "react"

function Popup(props) {
    return (props.trigger) ? (
      <div className="popup">
          <div className="popup_2">
              <button className="button_accept">Accept</button>
              <button className="button_back">Back</button>
              {props.children}
          </div>
      </div>
    ): "";
}

export default Popup