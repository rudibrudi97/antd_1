import Popup from "./Popup";
import {useState} from "react"

function Editing() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className={Editing}>
            <main>
                <br/>
                <button className="button_edit" onClick={() => setButtonPopup(true)}>Editing</button>
            </main>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

            </Popup>
        </div>
    )
}

export default Editing