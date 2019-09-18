import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

    markCompleted = () => {
        console.log('hello boobies')
    }

    render() {

        return this.props.todos.map((todo) => (
            <TodoItem   key={todo.id} 
                        todo={todo} 
                        toggleCompleted={this.props.toggleCompleted} 
                        removeItem={this.props.removeItem} 
            />
        ));
    };

};

// PropTypes (must match class name)
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;