import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />

        <TodoList
          todoList={todoList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
