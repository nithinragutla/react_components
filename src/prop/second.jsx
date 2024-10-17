


var Sec_com = (f) => {
   console.log(f.children[0])
   var b=f.children[0]
   var res=b.map((val,ind,arr)=>{
    return (
        <>
        <tr key={ind}>
    <td>{val["id"]}</td>
    <td>{val["title"]}</td>
    <td>{val["price"]}</td>
    <td>{val["description"]}</td>
    <td>{val["category"]}</td>
    <td><img src={val["image"]} alt="img" width={200}/></td>
    <td><button>{val["rating"]["rate"]}</button></td>
</tr>
</>
    )
   })
   

   return (
    <><table border={2}>
    <h1>hlo this is child</h1>
    {res}
    </table>
    </>
   )

   



}
export default Sec_com; 