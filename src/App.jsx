import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoActions, RemoveTodoActions } from './actions/TodoAction';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.Todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(AddTodoActions(todo));
      setTodo('');
    }
  };

  const handleRemove = (t) => {
    dispatch(RemoveTodoActions(t));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">TODO List</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a todo'
            type="text"
            className="input"
          />
          <button className="button">Add</button>
        </form>
        <ul className="todo-list">
          {todos && todos.map((t) => (
            <li key={t.id} className="todo-item">
              <span className="todo-text">{t.todo}</span>
              <button onClick={() => handleRemove(t)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
