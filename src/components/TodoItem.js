import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <li className="text-capitalize d-flex justify-content-between my-3">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="edit mx-2 text-success" onClick={handleEdit}><i className="fas fa-pen"></i></span>
                    <span className="delete mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        )
    }
}
