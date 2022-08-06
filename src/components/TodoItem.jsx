import * as React from 'react';

const TodoItem = ({ title, completed, onComplete, onDelete }) => {
  const [imageToggle, setImageToggle] = React.useState(true)
  const [isComplete, setIsComplete] = React.useState(false)

 

  
  const bgCompleted = completed?"bg-green-100":"bg-white "

  return (
    <>

      <div className={`p-4 
        sm:mx-2 flex items-center  sm:space-y-0 sm:space-x-6  
        my-1 
        
        mx-auto 
        rounded-xl shadow-lg space-y-2 ring-2 ring-purple-100 
        hover:ring-2 hover:ring-purple-400 hover:ring-offset-2 ${bgCompleted}`}  >
        {/* <img className="block mx-auto h-24 rounded-lg sm:mx-0 sm:shrink-0" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Men's Face" /> */}



        <span className='basis-1/3 text-center'>{completed?"🟢":"🟡"}</span>
        <div className=" basis-2/3 text-center  space-y-2 ">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {title}
            </p>
            <p className="text-slate-500 font-medium">
              {completed?"❤":"💔"}
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border border-purple-300 hover:text-gray-800 hover:bg-gradient-to-r hover:from-green-300 hover:to-pink-300 hover:border-gey focus:outline-none" onClick={onComplete}>✔</button>
          <button className="px-4 py-1 text-sm text-gray-900 font-semibold rounded-full border border-purple-300 hover:text-gray-800 hover:bg-gradient-to-r hover:from-green-300 hover:to-pink-300 hover:border-gey focus:outline-none" onClick={onDelete}>✖</button>
          

        </div>
      </div>


    </>
  )
}

export default TodoItem;