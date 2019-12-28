import React, { Component } from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

class App extends Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		);
	}
}

export default App;
