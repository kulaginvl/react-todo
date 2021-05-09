import React from 'react';
import Context from './context';
import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo</h1>

        {todos && <TodoList todos={todos} onToggle={toggleTodo} />}
      </div>
    </Context.Provider>
  );
}

export default App;
