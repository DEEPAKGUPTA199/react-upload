import React from 'react'
import "../../Style.css"
 function ClearButton(props) {
    return (
        <div className="clearBtn" onClick={props.handleClear}>
            {props.children}
            
        </div>
    )
}
export default ClearButton
