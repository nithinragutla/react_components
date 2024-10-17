import nani from "../nani.webp";
import nithin from "../NANI.png";
import nit from "../nani.jpg"
import nith from "../nithin.webp"

var n=[nani,nithin,nit,nith]

var img=n.map((val,ind)=>{
    return(
        <>
        <img src={val}/>
        </>
    )
})
function H(){
    return(
        <>
        <h1>hi im initial component</h1>
        {img}
        </>
    )
}
export default H;