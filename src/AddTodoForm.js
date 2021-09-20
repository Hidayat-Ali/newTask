import React from "react";
const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {

    return (
        <form onSubmit={onAddFormSubmit}>
          <h2>Please Have a Try</h2>
          
          <input
            name="todo"
            type="text"
            placeholder="Please write something..."
            value={todo}
            onChange={onAddInputChange}
          />
        </form>
      );


};

export default AddTodoForm ;
