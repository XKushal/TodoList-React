import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.updateCompletion = this.updateCompletion.bind(this);
	}
	create(newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((t) => t.id !== id)
		});
	}

	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	}

	updateCompletion(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	}

	render() {
		const todos = this.state.todos.map((l) => {
			return (
				<Todo
					key={l.id}
					id={l.id}
					task={l.task}
					removeTodo={this.remove}
					updateTodo={this.update}
					completed={l.completed}
					toggleTodo={this.updateCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>
					To do List!<span> A simple react todo list app</span>
				</h1>
				<ul>{todos}</ul>
				<TodoForm createTodo={this.create} />
			</div>
		);
	}
}

export default TodoList;
