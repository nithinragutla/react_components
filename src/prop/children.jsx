


var Child_com = (props) => {
    console.log(props.z)
    var b=props.z
    
    var res=b.map((mar,ind,arr)=>{
     return (
         <>
         <tr key={ind}>
     <td>{mar["id"]}</td>
     <td>{mar["title"]}</td>
     <td>{mar["price"]}</td>
     <td>{mar["description"]}</td>
     <td>{mar["category"]}</td>
     <td><img src={mar["image"]} alt="img" width={200}/></td>
     <td><button>{mar["rating"]["rate"]}</button></td>
 </tr>
 </>
     )
    })
    
 
    return (
     <>
     <table border={2}>
     <h1>hlo this is child</h1>
     {res}
     </table>
     </>
    )
 
    
 
 
 
 }
 export default Child_com; 