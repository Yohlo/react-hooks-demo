import React from 'react';
import { ThemeContext } from '../contexts';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            todos: JSON.parse(localStorage.getItem('todo')) || [],
            width: window.innerWidth
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.todos.length} items to do `;
        window.addEventListener('resize', () => this.setState({ width: window.innerWidth }));
    }

    componentDidUpdate() {
        document.title = `${this.state.todos.length} items to do `;
        localStorage.setItem('todo', JSON.stringify(this.state.todos));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.setState({ width: window.innerWidth }));
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: "",
            todos: [ this.state.input, ...this.state.todos ]
        })
    }

    handleClear(index) {
        var array = [...this.state.todos];
        array.splice(index, 1);
        this.setState({ todos: array });
    }

    render() {
        
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <div className={theme}>
                    <h2>Todo List</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} onChange={this.handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                    <ul>
                        <li>{this.state.width}</li>
                        {
                            this.state.todos.map((todo, index) => (
                                <li key={index} onClick={() => this.handleClear(index)}>{todo}</li>
                            ))
                        }
                    </ul>
                </div>
                )}
            </ThemeContext.Consumer>
        )
        
        
    }
}