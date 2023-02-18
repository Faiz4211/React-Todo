import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

const App = () => {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  // function to add todo 
  const addTodo = (title, desc) => {
    console.log('i am adding todo', title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // function to delete todo 
  const onDelete = (todo) => {
    console.log('I am deleted', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Navbar title='Todos App' searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  )
}

export default App;