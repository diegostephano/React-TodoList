import * as React from 'react';


const TodoContainer = (props) => {
  return (
    <React.Fragment>
      
      <div className="grid grid-cols-1 justify-items-stretch border">
        {props.children}
      </div>
      
    </React.Fragment>
  );

}

export default TodoContainer;