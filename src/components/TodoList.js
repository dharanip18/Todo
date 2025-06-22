import React from "react";

const TodoList = ({ todoList, handleEdit, handleDelete }) => {
  return (
    <div>
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
  );
};

export default TodoList;
