import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {  doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import TodoCard from "./TodoCard";
import useFetchTodos from "../hooks/fetchTodos";

export const UserDashboard = () => {
  const { currentUser } = useAuth();
  const [edit, setEdit] = useState(null);
  const [todo, setTodo] = useState("");
  const [edittedValue, setEdittedValue] = useState('');
const {loading, todos,  setTodos} = useFetchTodos();

  async function handleAddTodo() {
    if (!todo) {
      return
    }
    const  newKey = Object.keys(todos).length === 0? 1 : Math.max(...Object.keys(todos)) + 1
    setTodos({
      ...todos,
      [newKey]: todo,
    });
    const useRef = doc(db, 'users', currentUser.uid)
   
    await setDoc(useRef, {
      'todos': {
        [newKey]: todo
      }
    },{merge:true})
    setTodo('')
  }

  async function handleEditTodo (){
    if (!edittedValue) {
      return
    }
    const  newKey = edit
   
    setTodos({
      ...todos,
      [newKey]: edittedValue,
    });
    const useRef = doc(db, 'users', currentUser.uid)
    await setDoc(useRef, {
      'todos': {
        [newKey]: edittedValue
      }
    },{merge:true})
    setEdit(null)
    setEdittedValue('')
  }

function handleAddEdit(todoKey) {
  return () => {
    setEdit(todoKey)
    setEdittedValue(todos[todoKey])
  }
}
 function handleDelete(todoKey) {
 return async () => {
  const tempObj = {...todos}
  delete tempObj[todoKey]
  setTodos(tempObj)
  const useRef = doc(db, 'users', currentUser.uid)
  await setDoc(useRef, {
      'todos': {
        [todoKey]: deleteField()
      }
    },{merge:true})
 }
}

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col flex-1 gap-5 md:gap-3 text-sm md:text-xs">
       
        <div className="flex items-stretch ">
          <input
            type="text"
            name="todo"
            placeholder="Enter your todo "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="outline-none p-2 text-lg md:text-base text-slate-800 flex-1"
          />
          <button onClick={handleAddTodo} className="w-fit px-6 md:px-4 py-3 md:py-2 bg-amber-400  text-white font-medium text-base duration-300 hover:opacity-40 ">
            ADD
          </button>
        </div>
      { loading && <div className="flex-1 grid place-items-center ">
        <i className=" fa-solid fa-spinner animate-spin text-6xl "/>
        </div>
        }

      { !loading && <>
      {

        Object.keys(todos).map((todo, index)=>{ 
          return(
            <TodoCard key={index} handleDelete={handleDelete} handleEditTodo={handleEditTodo} handleAddEdit ={handleAddEdit} edit={edit} index={index} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue}>
              {todos[todo]}
            </TodoCard>
          )
        })
      }
      
      </>}
    
    </div>
  );
};
