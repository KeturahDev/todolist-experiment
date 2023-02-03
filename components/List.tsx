import React, { useState } from 'react';
import './styles.css';

interface Todo {
  text: string;
  completed: boolean;
}

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'walk a dog', completed: false },
  ]);
  const [text, setText] = useState('');

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    addTodo(text);
    setText('');
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className="item">
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => completeTodo(index)}
            >
              {todo.text}
            </li>
            <button onClick={() => removeTodo(index)}>remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
