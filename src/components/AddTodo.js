import React, { Component } from 'react'

export class AddTodo extends Component {

// Objects
    state = {
        title: ''
    }

// Functions
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ 
        [e.target.name] : e.target.value,
    });


// Output
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                {/* <input 
                    type="text"
                    name="description"
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add Todo..."
                    value={this.state.description}
                    onChange={this.onChange}
                /> */}
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
