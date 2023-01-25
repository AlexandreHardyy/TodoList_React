import React, { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");

  function handleInput(e) {
    setContent(e.target.value);
  }

  function handkeKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (content.length) {
      addTodo(content);
      setContent("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        onInput={handleInput}
        onKeyDown={handkeKeyDown}
        type="text"
        value={content}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
      />
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
