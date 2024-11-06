import { Component } from "react";
import "./todo.css";

class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            pass: "",
            list: []
        };
    }

    data = (event) => {
        this.setState({
            user: event.target.value
        });
    };

    dataa = (event) => {
        this.setState({
            pass: event.target.value
        });
    };

    sub = (event) => {
        event.preventDefault();
        const u = {
            username: this.state.user,
            password: this.state.pass
        };
        this.setState({
            list: [...this.state.list, u],
            user: "",
            pass: ""
        });
    };

    delete = (ind) => {
        const updated = this.state.list.filter((val, i) => i !== ind);
        this.setState({
            list: updated
        });
    };

    edit = (values, ind) => {
        const newUsername = prompt("Change username:", values.username);
        const newPassword = prompt("Change password:", values.password);

        const updatedList = [...this.state.list];
        updatedList[ind] = {
            username: newUsername || values.username,
            password: newPassword || values.password
        };

        this.setState({
            list: updatedList
        });
    };



    

    render() {
        const itemList = this.state.list.map((val, ind) => {
            return (
                <tr key={ind}>
                    <td>{val.username}</td>
                    <td>{val.password}</td>
                    <td><input type="button" value="edit" onClick={() => this.edit(val, ind)} /></td>
                    <td><input type="button" value="delete" onClick={() => this.delete(ind)} /></td>
                </tr>
            );
        });

        return (
            <>
                <h1>To Do List</h1>
                <form onSubmit={this.sub}>
                    <input type="text" name="data" value={this.state.user}onChange={this.data}/>
                    <input type="text" name="dataa" value={this.state.pass} onChange={this.dataa}/>
                    <input type="submit" value="Add" />
                </form>
                <br /><br /><br />
                <table>
                {itemList}
                </table>
            </>
        );
    }
}

export default Todolist;
