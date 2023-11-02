import React from "react";

function TodoCard({
  children,
  edit,
  handleAddEdit,
  handleEditTodo,
  handleDelete,
  edittedValue,
  setEdittedValue,
  todoKey,
}) {
  
  return (
    <div className=" p-3 md:p-2 relative flex items-stretch border border-white">
      <div className="flex flex-1">
        {!(edit === todoKey) ? (
          <>{children}</>
        ) : (
          <input
          name="edit"
            className="bg-inherit flex-1 text-white outline-none "
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        )}
      </div>
      <div className="flex items-center ">
       { !(edit ===todoKey)? <i
          className=" fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"
          onClick={handleAddEdit(todoKey)}
        /> : <i className=" fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer" onClick={handleEditTodo}/>} 
        <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer " />
      </div>
    </div>
  );
}

export default TodoCard;
