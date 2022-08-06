import React, { useState } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import TodoContainer from './components/TodoContainer'
import TodoSearch from './components/TodoSearch'
import products from './assets/product'




const useLocalStorage = (itemName, initialValue=[]) => {
  const localStorageItem = localStorage.getItem(itemName)
  let parseItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parseItem = [];
  }else{
    parseItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem] = useState(parseItem)
  
  const saveItem = (newTodo) => {
    const stringItem = JSON.stringify(newTodo)
    localStorage.setItem(itemName,stringItem);
    setItem(newTodo);
  }

  return [item, saveItem];
}


function App() {

  const [todos, saveTodo] = useLocalStorage('TODOS_V1');
  const [count, setCount] = useState(0)
  const [searchValue, setSearchValue] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  let searchedTodos = [];

  const addButtonClass = `p-4 m-4 bg-gray-300 absolute bottom-0 right-0  w-16 h-16 text-md text-gray-900 font-bold rounded-full border border-green-300 hover:text-gray-800 hover:bg-gradient-to-r hover:from-gray-300 hover:to-purple-300 hover:border-gey shadow-lg active:shadow-stone-500/50 active:shadow-inner`

  if(searchValue.length <= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) 
    })

  }

  const addNewTodo = () => {
    console.log('newTodo');
  };

  
  const toggleCompleteTodos = (id)=>{
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodo(newTodos);
  }

  const deleteTodo = (id)=>{
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodo(newTodos);
  }

  console.log("render antes del useEffect");

  React.useEffect(()=>{
    console.log('aqui se llama el codigo en useEffect');
  }, [todos.length])
  console.log("render luego del useEffect");

  return (
    <React.Fragment>
      
    <div className="App max-h-screen  bg-gray-800 ">
      <div className="
      overflow-y-auto 
      scroll-smooth  
      h-screen 
      max-w-2xl
      mx-auto my-auto
      p-4 
      justify-self-center 
      bg-white rounded-lg border border-gray-200 
      shadow-md  dark:border-gray-700">
        <h1 className="text-3xl font-bold underline">Vite + React</h1>
        
        <TodoForm/>
        {error && <p>error!</p>}
        {loading && <p>cargando</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
        <p>Has completado {searchedTodos.filter((todo)=>!!todo.completed).length} de {searchedTodos.length} TODOs</p>
        <TodoContainer completed={todos.filter((todo)=>!!todo.completed).length}>
          
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          {searchedTodos.map((todo) => {
            // agregar .filter((todo)=> !todo.completed) para sacar los completados
            return <TodoItem 
            key={todo.id} 
            title={todo.title} completed={todo.completed} 
            onComplete={()=>{toggleCompleteTodos(todo.id)}}
            onDelete={()=>{deleteTodo(todo.id)}} />
          }
          )}
        </TodoContainer>

        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        
        
        
        <button className={addButtonClass} onClick={addNewTodo}>
          +
        </button>
      </div>
    </div>
    
    
    </React.Fragment>
  )
}

export default App
