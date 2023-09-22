// import { motion } from "framer-motion";
import React, { useRef } from "react";
import './todo.css';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
     
      <input
        className="todo_input"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
     
      {item.completed === false && (
        
         <span  onClick={() => changeFocus()}> <AiFillEdit /></span>
         )}
        {item.completed === false && (
        
          <span onClick={() => completeTodo(item.id)}> <IoCheckmarkDoneSharp /></span>
        )}
        
        <span  onClick={() => removeTodo(item.id)}> <IoClose /></span>
      </div>
      
    
     
      {/* {item.completed && <span className="completed">Done</span>} */}
    
    </>
  );
};

export default TodoItem;
