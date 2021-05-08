function TodoItem({ todo, index, onChange }) {
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
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" />
        {todo.title}
      </span>
      <button onClick={null}>&#10006;</button>
    </li>
  );
}

export default TodoItem;
