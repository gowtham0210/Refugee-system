import React from "react";

const Trans = (props)=>{
    return(
        <tr>
            <td>{props.sender}</td>
            <td>{props.senderid}</td>
            <td>{props.amount}</td>
        </tr>
    )

}

export default Trans;