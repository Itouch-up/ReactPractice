import React from 'react'

function Hello(props){
    return ( 
        <div style={{color:props.color}}>{props.isSpecial ? <b>*</b> : null} Hello {props.name}</div>
    )
}
Hello.defaultProps = {
    name : "None"
}
export default Hello