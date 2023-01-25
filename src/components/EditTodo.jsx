import React, { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleInput(e) {
    setValue(e.target.value);
  }

  function handkeKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-10">
      <input
        onInput={handleInput}
        onKeyDown={handkeKeyDown}
        type="text"
        value={value}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
      />
      <Button text="Sauvegarder" onClick={handleClick} className="mr-15" />
      <Button text="Annuler" onClick={cancelEditTodo} />
    </div>
  );
}

export default EditTodo;
