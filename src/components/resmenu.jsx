import Descomponent from "./resdes";
function Tablecomponent(){
    return(
        <>
        <center>
        <table border={2}>
            <tr>
            <th>veg</th>
            <th>nonveg</th>
            </tr>
            <tr>
    <td>aalu fry</td>
    <td>Fish biryani</td>
    </tr>
    <tr><td>dall</td> 
    <td>chicken biryani</td></tr>
    <tr><td>sambar</td><td>prawns biryani</td></tr>
    <tr><td>chutney</td><td>chilli chicken</td></tr>
    <tr><td>goobi fry</td> <td>chicken fry</td></tr>
    
        </table>
        </center>
        <Descomponent/>
        </>
    )
}
export default Tablecomponent;