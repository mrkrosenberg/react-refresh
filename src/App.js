import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  axios  from 'axios';

// StyleSheet
import './App.scss';

// Components
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';

class App extends Component {

  state = {
    todos: []
  }

  // Functions

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }));
    }

    // Toggle Complete
    toggleCompleted = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      })
    }

    // Add Todo Item
    addItem = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false
      })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }),
        );
    }

    // Delete Todo Item
    removeItem = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
          })
        )
      
    }

  
// Output
  render() {
      return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo 
                  addItem={this.addItem}
                />
                <Todos 
                  todos={ this.state.todos } 
                  toggleCompleted={ this.toggleCompleted } 
                  removeItem={this.removeItem}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={about} />
          </div>
        </div>
      </Router>

    );
  }

}

export default App;
