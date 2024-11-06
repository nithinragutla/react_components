import { useState } from "react";


function Ho(){
    var [a,seta]=useState(0);
function env(){
    seta(a+1)
}
 var dec=()=>{
    seta(a-1)
}
    return(
        <>
        <h1>todo</h1>
        <h2>{a}</h2>
        <button onClick={env}>change</button>
        <button onClick={dec}>dec</button>
        </>
    )
}
export default Ho;
