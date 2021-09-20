import React from "react";

const EditForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {

    return (
        <form onSubmit={onEditFormSubmit}>
          <h2>Edit text</h2>
          <label htmlFor="updateTodo">Update text: </label>
          <input
            name="updateTodo"
            type="text"
            placeholder="Update text"
            value={currentTodo.text}
            onChange={onEditInputChange}
          />
          <button type="submit" onClick={onEditFormSubmit}>
            Update
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      );



};


export default  EditForm;