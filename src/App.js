import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import TodoItem from "./components/TodoItem";
import DeleteConfirmationPopup from "./components/DeleteConfirmationPopup";
import AddTodoNotificationPopup from "./components/AddTodoNotificationPopup";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]); // Array to store todos
  const [newTodo, setNewTodo] = useState(""); // String to store new todo item
  const [visibleTodos, setVisibleTodos] = useState(10); // Tracking the number of visible todos
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [showDeletePopup, setShowDeletePopup] = useState(false); // State variable to manage the visibility of the delete confirmation popup
  const [todoToDelete, setTodoToDelete] = useState(null); // State variable to store the ID of the todo item to be deleted
  const [showAddNotificationPopup, setShowAddNotificationPopup] =
    useState(false); // State variable to manage the visibility of the add todo notification popup

  // Fetch todos from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() === "" || newTodo.trim().length === 0) {
      setShowPopup(true); // Show popup if newTodo is empty
      return;
    }

    const newTodoItem = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
  };

  // -----
  const deleteTodo = (id) => {
    setTodoToDelete(id);
    setShowDeletePopup(true);
  };

  const confirmDelete = (id) => {
    // Delete todo logic
    setShowDeletePopup(false);
    setTodos(todos.filter((todo) => todo.id !== todoToDelete));
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
  };

  const showMoreTodos = () => {
    // incremeting number of todos on every click of show more button to show 10 more todos
    setVisibleTodos(visibleTodos + 10);
  };

  return (
    <div className="App">
      <h1>Todo List Task - Amasa Tech</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="todo-container">
        <div className="todo-list">
          {todos.slice(0, visibleTodos).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
      {/* visible Todos */}
      {visibleTodos < todos.length && (
        <button className="show-more-button" onClick={showMoreTodos}>
          Show More
        </button>
      )}

      {/* Popup to let user now todo is empty*/}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Empty todo cannot be added.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <DeleteConfirmationPopup
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}

      {/* Add Todo Notification Popup */}
      {showAddNotificationPopup && (
        <AddTodoNotificationPopup
          onClose={() => setShowAddNotificationPopup(false)}
        />
      )}
    </div>
  );
};

export default App;
