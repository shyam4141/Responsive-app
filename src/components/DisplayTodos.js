import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import './todo.css';
// import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("All");

  const [categories, setCategories] = useState([
    {
      name:'Active',
      status:'unselect'
    },
    {
      name:'Completed',
      status:'unselect'
    },
    {
      name:'All',
      status:'selected'
    }
  ]);


  const setSorting = (name) =>{
    setSort(name);
    categories.map((item)=>{
      if(item.name === name){
        item.status = 'selected'
      }else{
        item.status = 'unselect'
      }
    })
    // setCategories(newValues);
  }

  return (
    <div className="displaytodos">
      <div className="buttons">
        {categories.map((item)=>{
          return(
            <button className={`${item.status} btn btn-secondary status-btn`} onClick={() => setSorting(item.name)}>{item.name}</button>
         )
        })}
        
      </div>
      <div className="row sections">
       
          {props.todos.length > 0 && sort === "Active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "Completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "All"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
      
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
