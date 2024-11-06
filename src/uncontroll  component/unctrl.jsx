import { createRef } from "react";
import { Component } from "react";

class Unctrl extends Component{
    constructor(){
        super();
        this.g=createRef();
        this.g1=createRef();

    }
    sub=(event)=>{
        event.preventDefault()
        console.log(this.g.current.value);
        console.log(this.g1.current.value);
    }
render(){
    return(
        <>
        <h1>unctrl</h1>
        <form action="" onSubmit={this.sub}>
<input type="text" ref={this.g}/>
<input type="text"  ref={this.g1}/>
<input type="submit" value="submit"  />

        </form>
        </>
    )
}
}
export default Unctrl;