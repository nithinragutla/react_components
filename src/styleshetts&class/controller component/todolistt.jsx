import { Component } from "react";
import "./todo.css";

class Tabletodo extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    user=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    pass=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    sub=(event)=>{
event.preventDefault()
var obj={
    user:this.state.user,
    pass:this.state.pass
}
this.setState({
    data:[obj,...this.state.data]
})
    }
    del=(value,index)=>{
     var o=this.state.data.filter((val,ind)=>{
        return index!=ind; 
     })
     this.setState({
        data:o
     })
    }
    edi=(value,index)=>{
        var{user,pass}=value;
     var p=prompt("enter username" +user);
     var p2=prompt("enter password"+pass);
     var obj1={
        user:p,
        pass:p2
     }
     this.state.data.splice(index,1,obj1)
     console.log(this.state.data)
     this.setState({
        data:this.state.data
     })
    }

    render(){
        var dis= this.state.data.map((val,ind)=>{
           return(
            <tr key={ind}>
                <td>{val.user}</td>
                <td>{val.pass}</td>
                <td><button onClick={() => this.del(val,ind)}>delete</button></td>
                <td><button onClick={()=>this.edi(val,ind)}>edit</button></td>
            </tr>
           )
        })
        return(
            <>
            <h1>table todo</h1>
            {/* {console.log(this.state)} */}
            <form action=""onSubmit={this.sub} >
                <input type="text" name="user" onChange={this.user}/>
                <input type="text"  name="pass" onChange={this.pass}/>
                <input type="submit" value="submit" />
            </form>
            <table>
                {dis}
            </table>
            </>
        )
    }
}
export default Tabletodo;