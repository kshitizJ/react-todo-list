import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="Add a todo item" value={item} onChange={handleChange} />
                    </div>
                    <button type="submit" className={
                        editItem ? 'col-12 btn btn-block btn-success mt-3' : 'col-12 btn btn-block btn-info mt-3'
                    }>
                        {editItem ? 'Edit Item' : 'Add Item'}
                    </button>
                </form>
            </div>
        )
    }
}
    