import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    if (editId) {
      const editTodo = todoList.find((i) => i.id == editId);
      const updateTodo = todoList.map((i) =>
        i.id === editTodo.id
          ? (i = { id: i.id, todoName: todo })
          : { id: i.id, todoName: i.todoName }
      );
      setTodoList(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodoList([
        { id: `${todo}-${Date.now()}`, todoName: todo },
        ...todoList,
      ]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const deleteTodo = todoList.filter((i) => i.id !== id);
    setTodoList([...deleteTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todoList.find((i) => i.id == id);
    setTodo(editTodo.todoName);
    setEditId(editTodo.id);
  };

  return (
    <div className="App">
      <h2>Todo</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>

        <ul className="todolist">
          {todoList.map((item) => (
            <li className="listitem">
              <span>{item.todoName}</span>
              <div className="action-btns">
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
