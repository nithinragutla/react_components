import { useState } from "react";

function Funtodo() {
    var [b, setb] = useState([])

    var ib = (event) => {
        event.preventDefault();
        var obj = {
            [event.target[0].name]: event.target[0].value,
            [event.target[1].name]: event.target[1].value
        }
        setb([...b, obj])
        event.target[0].value=""
        event.target[1].value=""
    }
    var del = (val, ind) => {
        var j = b.filter((value, index) => {
            return index != ind
        })
        setb(j)
    }
    var edi = (value, index) => {
        var pr = prompt("enter the user");
        var prr = prompt("enter the password");
        var m = b.map((val, ind) => {
            if (ind == index) {
                value.user = pr
                value.pass = prr
            }
            return value
        })
        setb(m)
    }
    var ob = b.map((val, ind) => {
        return (
            <div key={ind}>
                <li>{val["user"]} {val["pass"]}<button onClick={() => {
                    del(val, ind)
                }}>delete</button> <button onClick={() => {
                    edi(val, ind)
                }}>edit</button></li>

            </div>
        )
    });


    return (
        <>
            <h1>Todo</h1>
            <form action="" onSubmit={ib}>
                <input type="text" name="user" />
                <input type="text" name="pass" />
                <input type="submit" name="register" />
            </form>
            <ol>{ob}</ol>
        </>
    )
}

export default Funtodo;