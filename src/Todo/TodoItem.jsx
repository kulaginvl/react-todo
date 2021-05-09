import React from 'react';
import Context from '../context';
import '../index.css';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: '10px 10px',
    border: '1px solid #696969',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  input: {
    marginRight: '10px',
  },
};
function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = React.useContext(Context);

  const classes = [];

  if (todo.done) {
    classes.push('compl');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.done}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button className="close" onClick={removeTodo.bind(null, todo.id)}>
        &#10006;
      </button>
    </li>
  );
}

export default TodoItem;
