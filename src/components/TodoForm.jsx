import * as React from 'react';
//<!-- Using form state modifers, the classes can be identical for every input -->
import TodoSearch from './TodoSearch';




const TodoForm = props => {
  const inputClass = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500`

  

  return (<React.Fragment>
    
    <div className="block p-4 container  mx-auto">
      {/* <label className="block">
        <span className="block text-sm font-medium text-slate-700">Tarea</span>
        <input type="text" placeholder="tbone" className={inputClass} />
      </label> */}

      


    </div>

  </React.Fragment>)
}

export default TodoForm;