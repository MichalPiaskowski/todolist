import React, {Component} from "react";
import './user-list.css'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            userInputs: [],
        }

    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value,
        })
    }

    handleClick = () => {
        if(this.state.userInput === "") {
            alert('Wpisz zadanie do wykonania')
        } else {
            let userInputs = this.state.userInputs;
            let user = {
                name: this.state.userInput,
                id: Date.now()
            }
            userInputs.push(user);

            this.setState({
                userInput: '',
                userInputs: userInputs
            })
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }

    removeUserItem = (id) => {
        let userInputs = this.state.userInputs.filter(user => user.id !== id);
        this.setState({
            userInputs: userInputs,
        })
    }

    render() {
        return (
        <div className="user-list-container" >
            <h1>To Do List</h1>
            <input type="text" value={this.state.userInput} className="input-user" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <button className="btn" onClick={this.handleClick}>Add Task</button>
            <ul className="user-list">
                {this.state.userInputs.map((input) => {
                    return <li onClick={e => this.removeUserItem(input.id)} key={input.id}>{input.name}</li>
                })}    
            </ul>
        </div>
         )
    }
}
export default UserList;


const requests = [];
Promise.all(requests);