import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( ✅ )"}
      </span>
      <Button
        text="Valider"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
        className="mr-15"
      />
      <Button
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        className="mr-15"
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}

export default TodoItem;
