import React, { Component } from 'react'

export default class Todo extends Component {
    editTodo(id){
        this.props.onEdit(id)
    }
    delTodo(id){
        this.props.onRemove(id)
    }
    render() {
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.cmoplated ? 'completed':''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.editTodo.bind(this)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.delTodo.bind(this)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}