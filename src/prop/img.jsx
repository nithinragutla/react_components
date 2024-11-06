import nani from "../nani.webp";
import nithin from "../NANI.png";
import nith from "../nithin.webp"

var n=[nani,nithin,nith]

var img=n.map((val,ind)=>{
    return(
        <>
        <table>
        <img src={val} width={200}/>
        </table>
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