import React from 'react';
const Github = (props)=>{
    return(
        <div>
        <img src = {props.url} alt = ""/>
           <h3>{props.userAccount}</h3>
        </div>
    )
}
export default Github;