import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const statusStyle = {
    // conditional colour chnaging of status if complete then green if pending then blue
    color: todo.completed ? "green" : "blue",
    fontWeight: "bold",
    marginLeft: "10px",
  };

  return (
    <div className="todo-item">
      <div className="todo-title">{todo.title}</div>
      <div>
        <span style={statusStyle}>
        {/* showing status of task */}
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>
      <div>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        {/* adding a white cross for delete button */}
          <svg
            stroke="white"
            fill="white"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
